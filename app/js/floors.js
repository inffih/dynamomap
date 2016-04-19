$("document").ready(function(e) {

  // navigation inside floors page
  $("#floorbutton2").click(function (e) {
     $(".content").load("pages/floor2.html");
      $(".bubble").children().html("LAITA TÄHÄN OMAN KERROKSEN TEKSTISI FLOORS.JS TIEDOSTOON");
  });
  
  $("#floorbutton3").click(function (e) {
     $(".content").load("pages/floor3.html");
    $(".bubble").children().html("Inssit ja sossut ne yhteen soppii!");
  });

  $("#floorbutton4").click(function (e) {
     $(".content").load("pages/floor4.html");
       $(".bubble").children().html("Onnea vaan matikkaan jos oot amiksesta tai lyhyen matikan kirjoittanut!");
  });

  $("#floorbutton5").click(function (e) {
     $(".content").load("pages/floor5.html");
       $(".bubble").children().html("LAITA TÄHÄN OMAN KERROKSEN TEKSTISI FLOORS.JS TIEDOSTOON");
  });

  // bubble animation
  $(".dynamit").mouseenter(function(){
    $(".bubble").addClass("bubble-is-open");
  });
  $(".dynamit").mouseleave(function(){
    $(".bubble").removeClass("bubble-is-open");
  });

});
