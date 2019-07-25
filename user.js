$(document).ready(function(){
    var api = "http://localhost:8080/letmefix/users/"
    var id = window.location.search
    id = id.substring(id.lastIndexOf("=")+1)
    console.log(id);
    var url = api + id;
    console.log(url);
    $.ajax({
        type: "GET",
        url: api+id,
        success: function(data){
            $('#username').text(data.username);
            $('#directHire').attr('href', "mailto:" + data.username + "@letmefix.com");
            $('#fullName').val(data.fullName);
            $('#address').val(data.address);
            $('#phoneNumber').val(data.phoneNumber);
            $('#specialty').val(data.specialty);
            $('#pricePerHour').val(data.pricePerHour);
            $('#industry').val(data.industry);
            if(data.type == "professional"){
                $("[name='professionalInfo']").removeClass('is-hidden');
                $("[name='companyInfo']").addClass('is-hidden');
                $("[name='customerInfo']").addClass('is-hidden');
            }else if(data.type == "company"){
                $("[name='professionalInfo']").addClass('is-hidden');
                $("[name='companyInfo']").removeClass('is-hidden');
                $("[name='customerInfo']").addClass('is-hidden');
            }else{
                $("[name='professionalInfo']").addClass('is-hidden');
                $("[name='companyInfo']").addClass('is-hidden');
                $("[name='customerInfo']").removeClass('is-hidden');
            }
        },
        contentType: "application/json",
        dataType:"json"
    }).fail(function(){
        alert("fail");
    });
    $("[name='confirmButton']").click(function(){
        $(this).parent().addClass('is-hidden');
    });
});