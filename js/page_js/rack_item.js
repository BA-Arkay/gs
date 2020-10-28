
(function ($) {
    $(document).ready(function () {
        $(document).on('submit', '#inputForm', function (e) {
            e.preventDefault();
            // console.log('form is submitting...');
            create();
        })

        $('#refresh').on('click', function () {
            location.reload();
        });
    });
})(jQuery)

function storeUnSyncedRolls(item) {
    $.ajax({
        type: 'POST',
        url: API_URL + '/store/unsynced/roll',
        data: {
            item
        },
        dataType: ajax_data_type,
        success: function (res) { console.log(res) },
        error: function (err) { console.error(err) }
    })
}

// crate boxes
function create() {
    let item = $("#item").val();
    let location = $("#location").val();

    if (location.length > 0) {
        // disabling the form to be submitted twice while already a request is being processed...
        $('button[type=submit]').prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Loading...');
        $('input').attr('readonly', true);

        if (item.length > 0) {
            $.ajax({
                type: "post",
                url: API_URL + '/locatedItem/box',
                dataType: ajax_data_type,
                data: {
                    item,
                    location
                },
                success: function (response) {
                    console.log(response);
                    // resetting the form
                    $('button[type=submit]').prop('disabled', false).html('submit');
                    $('input#item').attr('readonly', false).val("").focus();

                    response.id = '#flashMsg';

                    if (response.success) {
                        response.message_type = 'success';
                    }
                    else {
                        response.message_type = 'danger';
                    }
                    alertMessagePro(response);
                    tempIndex(response);

                    if(response.success) {
                        $.ajax({
                            type: "POST",
                            crossDomain: true,
                            dataType: 'json',
                            responseType: 'application/json',
                            data: {
                                'roll_no': item
                            },
                            url: APIOT_HOST + 'rack',
                            success: function (res) {
                                if (!res.success) {
                                    storeUnSyncedRolls(item);
                                }
                            },
                            error: (err) => {
                                storeUnSyncedRolls(item);
                            }
                        })
                    }
                },
                error: function (response) {
                    // resetting the form
                    $('button[type=submit]').prop('disabled', false).html('submit');
                    $('input#item').attr('readonly', false).val("").focus();

                    response.id = '#flashMsg';
                    alertMessagePro(response);

                }
            });
        }
        else {

            $.ajax({
                url: API_URL + '/boxes/boxByIdentifier/' + location,
                dataType: ajax_data_type,
                type: 'get',
                success: function (response) {
                    console.log(response);
                    response.id = '#flashMsg';
                    if (response.success) {
                        response.message_type = 'success';
                        $('input#item').attr('readonly', false).focus();
                    }
                    else {
                        response.message_type = 'danger';
                        $('input#location').attr('readonly', false).focus().val("");
                    }
                    alertMessagePro(response);
                },
                error: function (response) {
                    console.log(response);
                },
                complete: function () {
                    $('button[type=submit]').prop('disabled', false).html('submit');
                }
            })

        }
    }
    else {
        console.log(location);
    }
}

// temp index
function tempIndex(data) {

    if (data.item_detail) {
        let item_info = JSON.parse(data.item_detail);

        let yarn_count = '',
            fabric_style = '';

        for (let item in item_info.all_yarn_details) {
            yarn_count += item_info.all_yarn_details[item].yc + item_info.all_yarn_details[item].yt;
        }
        fabric_style = yarn_count + item_info.fabric_type;

        let tr = `<tr>
                    <td>${data.item ? data.item : 'UNDEFINED'}</td>
                    <td>${data.weight ? data.weight : '00.00'}</td>
                    <td>${data.location ? data.location : 'UNDEFINED'}</td>
                    <td>${item_info.buyer_name ? item_info.buyer_name : 'UNDEFINED'}</td>
                    <td>${item_info.order_no ? item_info.order_no : 'UNDEFINED'}</td>
                    <td>${fabric_style}</td>
                    <td>${item_info.color}</td>
                    <td>
                        <span class="badge badge-${data.table_class ? data.table_class : 'default'}">
                        <i class="fa fa-lg fa-${data.table_icon}"></i> ${data.message}
                        </span>
                    </td>
                </tr>`;
        $('#just_scanned_items tbody').prepend(tr);
    }
}
