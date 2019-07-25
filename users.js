$(document).ready(function(){
    var api = "http://localhost:8080/letmefix/users/"
    var type = window.location.search
    type = type.substring(type.lastIndexOf("=")+1)
    console.log(type);
    if(type != null && type!=""){
        api = api + "?type=" +type;
    }
    $.get(api, function(data, status){
        console.log(data.length);
        data.forEach(element => {
            var row = "<tr><td><a href='user.html?id=ID'>USERNAME</a></td><td>FULL_NAME</td><td>TYPE</td><td>ADDRESS</td><td>PHONE_NUMBER</td><td>SPECIALTY</td><td>PRICE_PER_HOUR</td><td>INDUSTRY</td></tr>"
            row = row.replace("ID", element.id);
            row = row.replace("USERNAME",element.username);
            row = row.replace("FULL_NAME",element.fullName);
            row = row.replace("TYPE",element.type);
            row = row.replace("ADDRESS",element.address);
            row = row.replace("PHONE_NUMBER",element.phoneNumber);
            if(element.specialty != null){
                row = row.replace("SPECIALTY",element.specialty);
            }else{
                row = row.replace("SPECIALTY","");
            }
            if(element.pricePerHour != 0){
                row = row.replace("PRICE_PER_HOUR",element.pricePerHour + "€");
            }else{
                row = row.replace("PRICE_PER_HOUR","");
            }
            if(element.industry != null){
                row = row.replace("INDUSTRY",element.industry);
            }else{
                row = row.replace("INDUSTRY","");
            }
            $("#servicesTable tr:last").after(row);
        });
    });
})