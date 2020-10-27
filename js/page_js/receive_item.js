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

function create(item_detail) {
    let item = $("#item").val();

    if (item) {
        $('button[type=submit]').prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Loading...');
        $('input').attr('readonly', true);

        $.ajax({
            type: "post",
            url: API_URL + '/locatedItem/receive',
            data: {
                item,
                item_detail
            },
            dataType: ajax_data_type,
            success: function (response) {
                $('button[type=submit]').prop('disabled', false).html('Submit');
                $('input').attr('readonly', false);
                $('input').val('');

                tempIndex(response);
                response.id = '#flashMsg';
                alertMessagePro(response);

                if(response.success) {
                    $.ajax({
                        type: "POST",
                        crossDomain: true,
                        dataType: 'json',
                        responseType: 'application/json',
                        data: {
                            'roll_no': item
                        },
                        url: SYNC_RECEIVED_ROLL,
                        success: function (res) {
                            if(!res.success)
                            {
                                let div = ` <div class="col-md-4">
                                                <table class="table table-sm table-bordered table-hover">
                                                    <thead style="background-color: #fff">
                                                        <tr>
                                                            <th colspan="2" class="text-center text-primary">${item}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th colspan="2" class="text-center text-muted">Location Not Found</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>`;

                                $('div#locationsBody').append(div);

                                storeUnSyncedRolls(item);
                            } else {
                                let div = ` <div class="col-md-4">
                                                <table class="table table-sm table-bordered table-hover">
                                                    <thead style="background-color: #fff">
                                                        <tr>
                                                            <th colspan="2" class="text-center text-primary">${item}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>`;

                                if(res.locations.length > 0) {
                                    res.locations.forEach(location => {
                                        div += `<tr>
                                                    <th class="text-info">${location.location}</th>
                                                    <th class="text-danger">${location.item}</th>
                                                </tr>`;
                                    })
                                } else {
                                    div += `<tr>
                                                <th colspan="2" class="text-center text-muted">Location Not Found</th>
                                            </tr>`;
                                }

                                div += `</tbody>
                                    </table>
                                </div>`;

                                $('div#locationsBody').append(div);

                                console.log(res);
                            }
                        },
                        error: (err) => {
                            let div = ` <div class="col-md-4">
                                            <table class="table table-sm table-bordered table-hover">
                                                <thead style="background-color: #fff">
                                                    <tr>
                                                        <th colspan="2" class="text-center text-primary">${item}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th colspan="2" class="text-muted text-center">Failed To Retrieve</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>`;

                            $('div#locationsBody').append(div);

                            storeUnSyncedRolls(item);
                            console.error(err);
                        }
                    })

                    $.ajax({
                        type: "POST",
                        crossDomain: true,
                        dataType: 'json',
                        responseType: 'application/json',
                        data: {
                            'roll_no': item
                        },
                        url: APIOT_HOST + 'receive',
                        success: function (res) { },
                        error: (err) => {  }
                    })
                } else {
                    $.ajax({
                        type: "POST",
                        crossDomain: true,
                        dataType: 'json',
                        responseType: 'application/json',
                        data: {
                            'roll_no': item
                        },
                        url: GET_ROLL_LOCATION,
                        success: function (res) {
                            if(!res.success)
                            {
                                let div = ` <div class="col-md-4">
                                                <table class="table table-sm table-bordered table-hover">
                                                    <thead style="background-color: #fff">
                                                        <tr>
                                                            <th colspan="2" class="text-center text-primary">${item}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th colspan="2" class="text-muted text-center">Location Not Found</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>`;

                                $('div#locationsBody').append(div);

                                storeUnSyncedRolls(item);
                            } else {
                                let div = `<div class="col-md-4">
                                                <table class="table table-sm table-bordered table-hover">
                                                    <thead style="background-color: #fff">
                                                        <tr>
                                                            <th colspan="2" class="text-center text-primary">${item}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>`;

                                if(res.locations.length > 0) {
                                    res.locations.forEach(location => {
                                        div += `<tr>
                                                    <th class="text-info">${location.location}</th>
                                                    <th class="text-danger">${location.item}</th>
                                                </tr>`;
                                    })
                                } else {
                                    div += `<tr>
                                                <th colspan="2" class="text-center text-muted">Location Not Found</th>
                                            </tr>`;
                                }

                                div += `</tbody>
                                    </table>
                                </div>`;

                                $('div#locationsBody').append(div);

                                console.log(res);
                            }
                        },
                        error: (err) => {
                            console.error(err);
                        }
                    })
                }
            },
            error: function (response) {
                $('button[type=submit]').prop('disabled', false).html('Submit');
                $('#item').attr('readonly', false);
                document.getElementById('item').value = '';
                response.id = '#flashMsg';
                alertMessagePro(response);
            }
        });
    } else {
        alert("please enter value");
    }

}


function getItemDetailsByItem() {
    // console.log('another function called!');

    let item = $("#item").val();
    if (item) {
        $('button[type=submit]').prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Loading...');
        $('input').attr('readonly', true);

        $.ajax({
            type: "get",
            crossDomain: true,
            dataType: ajax_data_type,
            responseType: 'application/json',
            contentType: 'application/json',
            url: item_info_url + item, // item_info_url from lib>js>config.js
            success: function (response) {
                if (response.success) {
                    console.log(response);
                    if(response.qc_date === null) {
                        let obj = {
                            "id": '#flashMsg',
                            "message": "<span class='font-weight-bold'>Roll QC Details Not Found!</span>",
                            "message_type": "danger",
                        }
                        alertMessagePro(obj);	
                    } else if(response.is_roll_onhold == 1) {
                        let obj = {
                            "id": '#flashMsg',
                            "message": "<span class='font-weight-bold'>Roll On Hold!</span>",
                            "message_type": "warning",
                        }
                        alertMessagePro(obj);					
					} else {
						let data = JSON.stringify(response);
                		create(data);
					}
                } else {
                    let obj = {
                        "id": '#flashMsg',
                        "message": "Invalid Roll no!",
                        "message_type": "warning",
                    }
                    alertMessagePro(obj);
                }
            },
            error: (error) => {
                console.log(error);
            },
            complete: function () {
                $('button[type=submit]').prop('disabled', false).html('Submit');
                $('#item').attr('readonly', false);
                document.getElementById('item').value = '';
            }
        })
    } else {
        alert('Please Scan A Roll!');
    }
}


(function ($) {
    $(document).ready(function () {
        $(document).on('submit', '#inputForm', function (e) {
            e.preventDefault();
            getItemDetailsByItem();

        })
    });
})(jQuery)


// temp index
function tempIndex(data) {

    let item_info = JSON.parse(data.item_detail),
        item_wt = Number(item_info.weight),
        // total_rows      = $('#just_scanned_items tbody tr.scan_count').length,
        total_rows = Number($('#sum_total_rows').text()),
        total_weight = Number($('#sum_total_weight').text());
    let yarn_count = '',
        fabric_style = '';

    for (let item in item_info.all_yarn_details) {
        yarn_count += item_info.all_yarn_details[item].yc + item_info.all_yarn_details[item].yt;
    }
    fabric_style = yarn_count + item_info.fabric_type;
    // console.log(item_info);
    if (data.success) {
        ++total_rows;
        total_weight += item_wt;
        // console.log(total_rows, total_weight);
        // console.log(total_weight);
    }

    let tr = `<tr class="scan_count">
                <td>${item_info.roll_no}</td>
                <td class="text-right">${item_info.weight}</td>
                <td>${item_info.buyer_name}</td>
                <td>${item_info.order_no}</td>
                <td>${fabric_style}</td>
                <td>${item_info.color}</td>
                <td><span class="badge badge-${data.table_class}"><i class="fas fa-lg fa-${data.table_icon}"></i> ${data.message}</span></td>
            </tr>`;
    $('#just_scanned_items tbody').prepend(tr);

    $("#sum_total_rows").text(total_rows);
    $("#sum_total_weight").text(total_weight);
}
{/* <td>${item_info.batch_no}</td>
<td>${data.location ? data.location : 'UNDEFINED'}</td> */}
