$(document).ready(function(){
    if(
        localStorage.getItem("adminLogin")
        != "true"
    ){
        location.href="login.html";
    }
});


$(document).ready(function(){

    var data = localStorage.getItem("orderDetails");

    if(data == null){
        data = "[]";
    }

    data = JSON.parse(data);
    $("#total-order").text(data.length);
    var content = "";
    for(var i=0; i<data.length; i++){

        content += `
        <tr>
            <td>${i+1}</td>
            <td>
                <img src="${data[i].photo}">
            </td>
            <td>
                ${data[i].name}
            </td>
            <td class="price">
                ${data[i].price}
            </td>
            <td>
                <input
                    type="button"
                    value="Xóa"
                    class="delete"
                    data-index="${i}">
            </td>
        </tr>
        `;
    }

$("#logout").click(function(){
    localStorage.removeItem("adminLogin");
    location.href="login.html";
});

    $("#order-table").append(content);
    $(".delete").click(function(){
        var index = $(this).attr("data-index");
        data.splice(index,1);
        localStorage.setItem(
            "orderDetails",
            JSON.stringify(data)
        );
        location.reload();
    });
});