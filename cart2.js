$(document).ready(function(){

    var data = localStorage.getItem("orderDetails");

    if(data==null){
        data="[]";
    }

    data=JSON.parse(data);

    $("#cart").text("🛒(" + data.length + ")");

    var content="";

    for(var i=0;i<data.length;i++){

        content += `
        <div class="order-item">
            <div class="order-photo">
                <img src="${data[i].photo}">
            </div>

            <div class="order-name">
                ${data[i].name}
            </div>

            <div class="order-price">
                ${data[i].price}
            </div>

            <div class="order-action">
                <input type="button" value="Xóa" data-index="${i}">
            </div>
        </div>
        `;
    }

    $("#content").html(content);

    $(".order-action input").click(function(){

        var index=$(this).attr("data-index");

        data.splice(index,1);

        localStorage.setItem(
            "orderDetails",
            JSON.stringify(data)
        );

        location.reload();

    });

});