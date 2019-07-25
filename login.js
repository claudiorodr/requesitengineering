$(document).ready(function () {
  $('#loginForm').submit(function (event) {
    var api = "http://localhost:8080/letmefix/users/login/"
    var loginSucess = false
    var username = $('#username').val();
    console.log(username);
    $.get(api + username, function (data) {
        sessionStorage.setItem("userId", data);
        window.location.replace("index.html");
    }).fail(function(){
      $('#loginErrorMessage').removeClass('is-hidden');
      setTimeout(function(){
        $('#loginErrorMessage').addClass('is-hidden');
      }, 5000);
    });
    event.preventDefault();
  })
});