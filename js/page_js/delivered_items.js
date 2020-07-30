(function ($) {
    $(document).ready(function () {
        let url_string = window.location.href;
        let url = new URL(url_string);
        let reference = url.searchParams.get('reference');

        getDeliveriesByRef(reference);
        getDeliveredItemsByRef(reference);
    });
})(jQuery)

function getDeliveriesByRef(reference) {
    $.ajax({
        url: API_URL + '/delivery/' + reference,
        type: 'get',
        dataType: ajax_data_type,
        success: function (res) {
            $("#ref_no").val(res.reference);
            $("#batch_no").val(res.batch_barcode);
            $("#total_weight").val(res.total_qty);
        }
    })
}

function getDeliveredItemsByRef(reference) {
    let output = '';
    $.ajax({
        url: API_URL + '/deliveryItem/' + reference,
        type: 'get',
        dataType: ajax_data_type,
        success: function (res) {
            for (let item of res) {
                let item_info = JSON.parse(item.item_detail);
                output += `<tr>
                            <td>${item.item_identifier}</td>
                            <td class="text-right">${item.quantity}</td>
                        </tr>`;
            }
            $("#delivered_item tbody").append(output);
        }
    })
}