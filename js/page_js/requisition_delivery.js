
(function ($) {
    $(document).ready(function () {
        $(document).on('submit', '#inputForm', function (e) {
            e.preventDefault();
            // console.log('form is submitting...');
            create();
        })

    });
})(jQuery)

// crate boxes
function create() {
    let requisition_no = $("#requisition_no").val();
    let item = $("#item").val();

    if (requisition_no.length > 0) {
        // disabling the form to be submitted twice while already a request is being processed...
        $('button[type=submit]').prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Loading...');
        $('input').attr('readonly', true);

        if (item.length > 0) {
            let just_scan_total_weight_1 = Number($('#sum_total_weight').text());
            let requisition_total_qty_1 = Number($('#table_total_qty').text());
            if (just_scan_total_weight_1 < requisition_total_qty_1) {
                $.ajax({
                    type: "get",
                    url: API_URL + '/requisition/item',
                    dataType: ajax_data_type,
                    data: {
                        item: item,
                        order_no: $("td#table_order_no").text(),
                        color: $("td#table_color").text(),
                        batch_no: $("td#table_requisition_no").text(),
                        fabric_type: $("td#table_fabric_types").text()
                    },
                    success: function (response) {
                        console.log(response);
                        // resetting the form
                        $('button[type=submit]').prop('disabled', false).html('submit');
                        $('input#item').attr('readonly', false).val("").focus();

                        // console.log(" scan item : "+typeof just_scan_total_weight);
                        // console.log(" total : "+typeof requisition_total_qty);
                        response.id = '#flashMsg';

                        if (response.success) {
                            response.message_type = 'success';
                            tempIndex(response.data);


                            let just_scan_total_weight = Number($('#sum_total_weight').text());
                            let requisition_total_qty = Number($('#table_total_qty').text());
                            let total_rows = Number($('#sum_total_rows').text());

                            if (total_rows <= 1) {
                                $.ajax({
                                    url: requisition_url + "/is_issuing_set_active/" + requisition_no,
                                    dataType: ajax_data_type,
                                    type: 'get',
                                    success: function (response) {
                                        console.log(response);
                                    }
                                });
                            }
                            else if (just_scan_total_weight >= requisition_total_qty) {
                                $.ajax({
                                    url: requisition_url + "/requisition_delivery_confirmed/" + requisition_no,
                                    dataType: ajax_data_type,
                                    type: 'get',
                                    success: function (response) {
                                        console.log(response);
                                        $('input#item').attr('readonly', true).val("");
                                    }
                                });
                            }
                        }
                        else {
                            response.message_type = 'danger';
                        }
                        alertMessagePro(response);
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
            else{
                console.log("over");
            }

        }
        else {

            $.ajax({
                url: requisition_url + "/get_requisition_by_title/" + requisition_no,
                dataType: ajax_data_type,
                type: 'get',
                success: function (response) {
                    console.log(response);
                    response.id = '#flashMsg';
                    if (response.success) {
                        response.message_type = 'success';
                        $('input#item').attr('readonly', false).focus();
                        /*  */
                        let data = response.data;
                        $("td#table_order_no").text(data.order_barcode);
                        $("td#table_color").text(data.color);
                        $("td#table_requisition_no").text(data.title);
                        $("td#table_fabric_types").text(data.fabric_types);
                        $("td#table_fabric_type_wise_qty").text(data.fabric_typewise_qty);
                        $("td#table_total_qty").text(data.qty);

                    }
                    else {
                        response.message_type = 'danger';
                        $('input#requisition_no').attr('readonly', false).focus().val("");
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
        console.log(requisition_no);
    }
}

// temp index
function tempIndex(data) {

    if (data.item_detail) {
        let item_info = JSON.parse(data.item_detail),
            item_wt = Number(item_info.weight),
            // total_rows      = $('#just_scanned_items tbody tr.scan_count').length,
            total_rows = Number($('#sum_total_rows').text()),
            total_weight = Number($('#sum_total_weight').text());

        ++total_rows;
        total_weight += item_wt;
        // console.log(total_rows, total_weight);
        // console.log(total_weight);

        let tr = `<tr>
                    <td>${data.item ? data.item : 'N/A'}</td>
                    <td>${item_info.weight ? item_info.weight : 00}</td>
                    <td>${item_info.buyer_name ? item_info.buyer_name : 'N/A'}</td>
                    <td>${item_info.order_no ? item_info.order_no : 'N/A'}</td>
                    <td>${data.batch_no ? data.batch_no : 'N/A'}</td>
                    <td>${item_info.color ? item_info.color : 'N/A'}</td>
                    <td>${item_info.fabric_type ? item_info.fabric_type : 'N/A'}</td>
                    <td class="text-success"><i class="fa fa-check"></i></td>
                </tr>`;
        $('#just_scanned_items tbody').prepend(tr);

        $("#sum_total_rows").text(total_rows);
        $("#sum_total_weight").text(total_weight);
    }
}
