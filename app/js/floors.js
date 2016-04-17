$("document").ready(function(e) {

  // navigation inside floors page
  $("#floorbutton2").click(function (e) {
     $(".content").load("pages/floor2.html");
  });
  
  $("#floorbutton3").click(function (e) {
     $(".content").load("pages/floor3.html");
  });

  $("#floorbutton4").click(function (e) {
     $(".content").load("pages/floor4.html");
  });

  $("#floorbutton5").click(function (e) {
     $(".content").load("pages/floor5.html");
  });

  // bubble animation
  $(".dynamit").mouseenter(function(){
    $(".bubble").addClass("bubble-is-open");
  });
  $(".dynamit").mouseleave(function(){
    $(".bubble").removeClass("bubble-is-open");
  });

});
