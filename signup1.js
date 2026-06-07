$(document).ready(function(){
    $("#signup-btn").click(function(){
        var fullname = $("#fullname").val();
        var birthday = $("#birthday").val();
        var email = $("#email").val();
        var username = $("#username").val();
        var phone = $("#phone").val();
        var password = $("#password").val();
        var repassword = $("#repassword").val();

        if(password != repassword){
            alert("Mật khẩu không đúng");
            return;
        }
        var users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];

        var user = {
            fullname: fullname,
            birthday: birthday,
            email: email,
            username: username,
            phone: phone,
            password: password

        };
        users.push(user);
        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );
        alert("Đăng ký thành công");
        location.href="login.html";

    });

});