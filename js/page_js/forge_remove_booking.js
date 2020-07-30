(function ($) {

    $(document).on('submit', 'form#forge_remove_booking', function (e) {
        e.preventDefault();

        let identifier = $("#identifier");
        let flashMsg_obj = {
            id: "#flashMsg",
            message_type: "",
            message: ""
        }

        $.ajax({
            url: API_URL + '/boxes/forge_remove_booking',
            type: 'post',
            dataType: ajax_data_type,
            data: {
                identifier: identifier.val()
            },
            success: function (res) {
                // console.log(res);
                if (res.success) {
                    flashMsg_obj.message_type = 'success';
                } else {
                    flashMsg_obj.message_type = 'danger';
                }
                flashMsg_obj.message = res.message;
                alertMessagePro(flashMsg_obj);

                temp_tr(res);
            },
            error: function (res) {
                console.log(res);
            },
            beforeSend: function () {
                $('button[type=submit]').prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                $('input').attr('readonly', true);
            },
            complete: function () {

                $('button[type=submit]').prop('disabled', false).html('Submit');
                $('input').attr('readonly', false).val("");

            }
        })

    })

})(jQuery);


function temp_tr(obj) {
    console.log(obj.data);
    obj.class = obj.status == true ? 'success' : 'danger';
    obj.icon = obj.status == true ? 'check' : 'times';

    let output  =   `<tr>${!obj.data.box ? 'UNDEFINED' : obj.data.box}</tr>
                    <tr>${!obj.data.batch_no ? 'UNDEFINED' : obj.data.batch_no}</tr>
                    <tr>
                        <span class="badge badge-${obj.class} badge-pill">
                        <i class="fa fa-${obj.icon}"></i> ${obj.message}
                        </span>
                    </tr>`;

    $("#forge_remove_booking_table tbody").append(output)
}

