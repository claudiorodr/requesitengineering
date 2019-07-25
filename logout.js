function logout(){
    sessionStorage.removeItem("userId");
    window.location.replace("login.html");
}