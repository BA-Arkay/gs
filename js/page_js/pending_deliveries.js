/* 
 * json format
 {
    ref_no              : xxxx,
    batch_no            : xxxx,
    batch_num_rolls     : 00,
    batch_qty           : 00.00,
    scanned_num_rolls   : 00,
    scanned_num_qty     : 00.00,
    scanned_items       : [
                            {roll_no:xxx,  weight:00.00},
                            {roll_no:xxx,  weight:00.00},
                            {roll_no:xxx,  weight:00.00},
                            {roll_no:xxx,  weight:00.00}
                        ]
 }
 */

(function ($) {
    $(document).ready(function () {
        $(document).on('click', '.pending_delivery_detail>.btn', function (e) {
            let data = $(this).data("delivery-info");

            pending_delivery_detail_modal_show(data);
            $('#pending_delivery_detail_modal').modal('show');
        });

        index();
    });
})(jQuery);

function index() {
    let output = null;
    let data = {
        scanned_num_of_items: 0,
        scanned_qty: 0,
    }
    $.ajax({
        url: API_URL + '/delivery',
        type: 'get',
        dataType: ajax_data_type,
        success: function (res) {
            console.log(res);
            for (let delivery of res) {
                for (let delivery_item of delivery.delivered_items) {
                    data.scanned_num_of_items += 1;
                    data.scanned_qty += parseFloat(delivery_item.quantity);
                    delivery_item.batch_barcode = delivery.batch_barcode;
                }
                output += `<tr>
                            <td>${delivery.reference}</td>
                            <td>${data.scanned_num_of_items}</td>
                            <td class="text-right">${data.scanned_qty.toFixed(2)}</td>
                            <td>${delivery.batch_barcode}</td>
                            <td>${delivery.created_at}</td>
                            <td class="pending_delivery_detail text-center">
                                <button title="Details" data-toggle="tooltip" class="btn btn-link" 
                                data-delivery-info='${JSON.stringify(delivery)}'>
                                    <i class="fa fa-edit"></i>
                                </button>
                            </td>
                        </tr>`;
            }
            $("#delivered_roll_table tbody").append(output);
        }
    })
}

function pending_delivery_detail_modal_show(data) {
    let output = '';
    let num_of_items = 0;
    let total_qty = 0;
    for (let item of data.delivered_items) {
        console.log(item);
        num_of_items +=1;
        total_qty += parseFloat(item.quantity);
        output += `<tr>
                        <td>${item.item_identifier}</td>
                        <td>${item.quantity}</td>
                        <td>${data.batch_barcode}</td>
                        <td>
                            <button class="btn btn-link text-danger">
                                <i class="fa fa-times"></i>
                            </button>
                        </td>
                    </tr>`;
    }
     /*  */
     $("#pending_delivery_detail_modal_ref").text(data.reference);
     $("#pending_delivery_detail_modal_batch_no").text(data.batch_barcode);
     $("#pending_delivery_detail_modal_num_of_items").text(num_of_items);
     $("#pending_delivery_detail_modal_tatal_qty").text(total_qty);

    $("#pending_delivery_detail_modal_roll_info_table tbody").html(output);
}