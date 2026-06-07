$(document).ready(function(){
    $("#login-btn").click(function(){
        var user = $("#username").val();
        var pass = $("#password").val();

        // Tài khoản admin
        if(user=="admin" && pass=="123456"){
            localStorage.setItem(
                "adminLogin",
                "true"
            );
            location.href="admin.html";
            return;
        }

        // Tài khoản người dùng đã đăng ký
        var users = JSON.parse(
            localStorage.getItem("users")
        ) || [];
        var found = false;
        for(var i=0; i<users.length; i++){
            if(
                users[i].username == user
                &&
                users[i].password == pass
            ){
                found = true;
                break;
            }
        }
        if(found){
            localStorage.setItem(
                "adminLogin",
                "false"
            );
            location.href=
            "index.html";
            alert(
                "Đăng nhập thành công"
            );
        }
        else{
            alert(
                "Sai tài khoản hoặc mật khẩu"
            );

        }

    });

});