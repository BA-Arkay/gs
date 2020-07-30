(function ($) {

    $(document).on('submit', '#inputForm', function (e) {
        e.preventDefault();
        create();
    });

    $('#refresh').on('click', function () {
        location.reload();
    });

})(jQuery);

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
                url: API_URL + '/locatedItem/move',
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
                                'roll_no': item,
                                'location': response.data.to_box
                            },
                            url: SYNC_RACKED_ROLL,
                            success: function (res) {
                                if(!res.success)
                                {
                                    storeUnSyncedRolls(item);
                                } else {
                                    console.log(res);
                                }
                            },
                            error: (err) => { 
                                storeUnSyncedRolls(item);
                                console.error(err);
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
function tempIndex(response) {
    console.log(response.data);

    let item_info = JSON.parse(response.data.item.item_detail),
        item_wt = Number(item_info.weight),
        // total_rows      = $('#just_scanned_items tbody tr.scan_count').length,
        total_rows = Number($('#sum_total_rows').text()),
        total_weight = Number($('#sum_total_weight').text());

    let table_class = '',
        table_icon = '';
    if (response.success) {
        ++total_rows;
        total_weight += item_wt;
        // console.log(total_rows, total_weight);
        // console.log(total_weight);
        table_class = 'success';
        table_icon = 'check';
    }
    else{
        table_class = 'danger';
        table_icon = 'times';
    }


    let tr = `<tr class="scan_count">
                     <td>${item_info.roll_no ? item_info.roll_no : 'N/A'}</td>
                     <td class="text-right">${item_info.weight}</td>
                     <td>${response.data.from_box ? response.data.from_box : 'N/A'}</td>
                     <td>${response.data.to_box ? response.data.to_box : 'N/A'}</td>
                     <td>${item_info.buyer_name ? item_info.buyer_name : 'N/A'}</td>
                     <td>${item_info.order_no ? item_info.order_no : 'N/A'}</td>
                     <td>${item_info.color ? item_info.color : 'N/A'}</td>
                     <td>${item_info.style_no ? item_info.style_no : 'N/A'}</td>
                     <td>${item_info.size ? item_info.size : 'N/A'}</td>
                     <td><span class="badge badge-${table_class}"><i class="fas fa-lg fa-${table_icon}"></i> ${response.message}</span></td>
                 </tr>`;
    $('#just_scanned_items tbody').prepend(tr);

    // $("#sum_total_rows").text(total_rows);
    // $("#sum_total_weight").text(total_weight);
}
