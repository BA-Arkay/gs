(function ($) {
    $(document).ready(function () {
        index();
    });
})(jQuery)

function index() {
    let output = '';
    $.ajax({
        url: API_URL + '/delivery/index',
        type: 'get',
        dataType: ajax_data_type,
        success: function (res) {
            // console.log(res);
            for (let delivery of res) {
                let batch_info = JSON.parse(delivery.batch_detail);
                // console.log(batch_info);
                output += `<tr>
                            <td>${delivery.reference}</td>
                            <td>${delivery.batch_barcode}</td>
                            <td>${delivery.total_qty}</td>
                            <td>${batch_info ? batch_info.order_no : 'UNDWFINED'}</td>
                            <td>${delivery.delivery_confirmed_at}</td>
                            <td>${delivery.created_by}</td>
                            <td>
                                <a href="delivered_items?reference=${delivery.reference}" class="btn btn-success btn-md">detail</a>
                            </td>
                        </tr>`;
            }
            $("#delivery_report tbody").append(output);
        }
    })
}