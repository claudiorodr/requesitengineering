$(document).ready(function(){
  $("#type").change(function() {
    if($("#type").val() == "customer"){
      $("#professionalOptions").addClass("is-hidden");
      $("#companyOptions").addClass("is-hidden");
    }else{
      if($("#type").val() == "company"){
        $("#companyOptions").removeClass("is-hidden");
        $("#professionalOptions").addClass("is-hidden");      
      }
      else{
        $("#professionalOptions").removeClass("is-hidden");
        $("#companyOptions").addClass("is-hidden");

      }
    }
  });

  var api = "http://localhost:8080/letmefix/"
  $("#registerForm").submit(function(event){
    var data = $("#registerForm").serializeArray().reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    },{});
    data.pricePerHour = parseFloat(data.pricePerHour);
    console.log(data);
    var endpoint = api + "users";
    console.log(endpoint);
    $.ajax({
      url: endpoint,
      type: "POST",
      data: JSON.stringify(data),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function(){
        window.location.replace("login.html");
        console.log(status)
      },
      error: function(jqXHR, status){
        console.log(status);
        $("#registrationErrorMessage").removeClass("is-hidden");
      }
    });
    event.preventDefault();
  });
});