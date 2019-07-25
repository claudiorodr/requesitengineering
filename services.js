$(document).ready(function(){
    var api = "http://localhost:8080/letmefix/services"
    $.get(api, function(data, status){
        console.log(data.length);
        data.forEach(element => {
            var row = "<tr><td><a href='service.html?id=ID'>DESCRIPTION</a></td><td>ADDRESS</td><td>FINAL_DATE</td><td>TYPE</td><td><img src='PHOTO' style='max-height:100px'/></td></tr>"
            row = row.replace("ID", element.id);
            row = row.replace("DESCRIPTION", element.description);
            row = row.replace("ADDRESS", element.address);
            row = row.replace("FINAL_DATE", element.finalDate);
            row = row.replace("TYPE", element.type);
            row = row.replace("PHOTO", element.photo);
            $("#servicesTable tr:last").after(row);
        });
    });
})