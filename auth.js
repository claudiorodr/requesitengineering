$(document).ready(function(){
    var userId = sessionStorage.getItem("userId");
    if(userId == null){
        window.location.replace("login.html");
    }else{
        var link = "user.html?id=" + userId;
        $("#myDetails").attr("href", link);
    }
});