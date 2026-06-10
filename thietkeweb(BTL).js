if(localStorage.getItem("products") == null){
    var products = [
        {
            id:1,
            name:"Sofa ghế nằm SHIBUYA",
            price:"16.400.000đ",
            photo:"sofaghenamshibuya.jpg"
        },
        {
            id:2,
            name:"Sofa CONNEMARA",
            price:"14.500.000đ",
            photo:"sofaconnemara.jpg"
        },
        {
            id:3,
            name:"Sofa giường BOHEMIA",
            price:"8.700.000đ",
            photo:"sofagiuongbohemia.jpg"
        },
        {
            id:4,
            name:"Sofa MONACO",
            price:"13.990.000đ",
            photo:"sofamonaco.jpg"
        }
    ];

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );
}

var n = 3;
var i = 1;

function next() {
    if (i < n)
        i++;
    else
        i = 1;

    document.getElementById("slide").src = "slide" + i + ".jpg";
}

function autoPlay() {
    setInterval(next, 3000);
}

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

        localStorage.setItem(
            "orderDetails",
            JSON.stringify(orders)
        );

        $("#cart").text("🛒(" + orders.length + ")");

        alert("Đã thêm vào giỏ hàng");
    });

});

