$(document).ready(function(){

    $(".thumb").click(function(){

        var img = $(this).attr("src");

        $("#main-img").attr("src",img);

        $(".thumb").removeClass("active");
        $(this).addClass("active");

    });


    $(".tab").click(function(){

        var id = $(this).data("tab");

        $(".tab").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").removeClass("active");

        $("#tab"+id).addClass("active");

    });

});

$(document).ready(function () {

    let orders = JSON.parse(localStorage.getItem("orderDetails")) || [];

   	$("#cart").text("🛒(" + orders.length + ")");

    $(".buy").click(function (e) {

        e.stopPropagation();

        let item = $(this).closest(".product");

        let order = {
            name: item.find(".name").text(),
            price: item.find(".price").text(),
            photo: item.find(".photo").attr("src")
        };

        orders.push(order);

        localStorage.setItem("orderDetails", JSON.stringify(orders));

       	$("#cart").text("🛒(" + orders.length + ")");

        alert("Đã thêm vào giỏ hàng");
    });

});