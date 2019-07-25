$(document).ready(function(){
    $("#fileUpload").on("change", function(){
        var reader = new FileReader();
        reader.readAsDataURL($(this).prop('files')[0]);
        var base64 = "";
        reader.onload = function(event){
            $("#photo").val(event.target.result);
        };
    });
    var api = "http://localhost:8080/letmefix/services"
    $("#newServiceForm").submit(function(event){
        var data = $("#newServiceForm").serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        },{});
        data.userId = sessionStorage.getItem("userId");
        $.ajax({
            url: api,
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function(data, status){
                var page = "service.html?id=" + data.id;
                window.location.replace(page);
            },
            error: function(jqXHR, status){
                console.log(status);
                $("#newServiceErrorMessage").removeClass("is-hidden");
            }
        });
        event.preventDefault();
    });
})