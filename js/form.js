$(function() {
//Validate
    //Validate Username         
    $('.form-name').on('input', function () {
        if (!/[^A-Za-z0-9_@\.]|@{2,}|\.{5,}/.test($('.form-name').val())) {
            $('.form-name').css('border',"2px solid red")
            $('.form-name_error').html('&#9888');
            $('.form-name_error').css('color', 'red');
            event.preventDefault();
        }
        else {
            $('.form-name').css('border',"2px solid white")
            $('.form-name_error').html('&#10004')
            $('.form-name_error').css('color', 'white');
        }
    })

    //Validate Email
    $('.form-email').on('input', function () {
        if (!/^.+@[^\.].*\.[a-z]{2,}$/.test($('.form-email').val())) {
            $('.form-email').css('border',"2px solid red")
            $('.form-email_error').html('&#9888');
            $('.form-email_error').css('color', 'red');
        }
        else {
            $('.form-email').css('border',"2px solid white")
            $('.form-email_error').html('&#10004');
            $('.form-email_error').css('color', 'white');
        }
    })

    //Validate phone
    $('.form-phone').on('input', function () {
        if (!/((09|03|07|08|05)+([0-9]{8})\b)/g.test($('.form-phone').val())) {
            $('.form-phone').css('border',"2px solid red")
            $('.form-phone_error').html('&#9888');
            $('.form-phone_error').css('color', 'red');
            event.preventDefault();
        }
        else {
            $('.form-phone').css('border',"2px solid white")
            $('.form-phone_error').html('&#10004');
            $('.form-phone_error').css('color', 'white');
        }
    })
    $('form').on('submit', function() {
        if ($('.form-name').val() && $('.form-email').val() && $('.form-phone').val()) {alert(`CÁM ƠN BẠN ĐÃ ĐĂNG KÝ, CHÚNG TÔI SẼ GỌI LẠI TRONG THỜI GIAN SỚM NHẤT`)}
            else {
        //Kiểm tra Họ tên có trống không?
        if (!$('.form-name').val()) {
            $('.form-name').css('border',"2px solid red")
            $('.form-name_error').html('&#9888');
            $('.form-name_error').css('color', 'red');
            event.preventDefault();
        }
        //Kiểm tra Email có trống không?        
        if (!$('.form-email').val()) {
            $('.form-email').css('border',"2px solid red")
            $('.form-email_error').html('&#9888');
            $('.form-email_error').css('color', 'red');
            event.preventDefault()
        }
        //Kiểm tra SĐT có trống không       
        if (!$('.form-phone').val()) {
            $('.form-phone').css('border',"2px solid red")
            $('.form-phone_error').html('&#9888');
            $('.form-phone_error').css('color', 'red');
            event.preventDefault();
        }
    }
}) 
});