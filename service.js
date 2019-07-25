$(document).ready(function(){
  var api = "http://localhost:8080/letmefix/services/"
  console.log(window.location.search);
  var id = window.location.search
  id = id.substring(id.lastIndexOf("=")+1)
  console.log(id);
  var url = api + id;
  console.log(url);
  $.ajax({
    type: "GET",
    url: api+id,
    success: function(data){
      $('#title').text(data.description);
      $('#finalDate').text(data.finalDate);
      $('#address').text(data.address);
      $('#type').text(data.type);
      $('#photo').attr('src', data.photo);
    },
    contentType: "application/json",
    dataType:"json"
  }).fail(function(){
    alert("fail");
  });
  $("#startService").on("click", function(){
    $(this).addClass('is-hidden');
    $("#stopService").removeClass('is-hidden');
  });
  $("#stopService").on("click", function(){
    $(this).addClass('is-hidden');
    $("#startService").removeClass('is-hidden');
  });
});