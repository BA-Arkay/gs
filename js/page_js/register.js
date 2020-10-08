(function ($) {
    $(document).on('submit', '#input_form', function (e) {
        e.preventDefault();

        let obj = {
            fname: $("#fname").val(),
            lname: $("#lname").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            password: $("#password").val(),
            r_password: $("#r_password").val(),
            domainName : window.location.hostname   
        }

        console.log(window.location.hostname);
        console.log(window.location.host);

        if (obj.password == obj.r_password) {

            $.ajax({
                url: USER_API_URL+'/auth/registration',
                type: 'post',
                dataType: 'json',
                data: obj,
                success: function (responce) {
                    console.log(responce);
                    alert(responce.message);
                },
                error: function (responce) {
                    console.log(responce);
                }
            })
        }
        else {
            alert("password not match..!")
        }
    })
})(jQuery)