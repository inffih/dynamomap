$("document").ready(function(e) {
  $("#logo").text("Dynamomap: Hissi");
  // navigation inside floors page
  $("#floorbutton2").click(function (e) {
      $("#logo").text("Dynamomap: Toinen kerros");
     $(".content").load("pages/floor2.html");
      $(".bubble").children().html("Opiskelijakortilla voi saada alennusta myös kaljasta!");
  });
  
  $("#floorbutton3").click(function (e) {
      $("#logo").text("Dynamomap: Kolmas kerros");
     $(".content").load("pages/floor3.html");
    $(".bubble").children().html("Inssit ja sossut ne yhteen soppii!");
  });

  $("#floorbutton4").click(function (e) {
      $("#logo").text("Dynamomap: Neljäs kerros");
     $(".content").load("pages/floor4.html");
       $(".bubble").children().html("Onnea vaan matikkaan jos oot amiksesta tai lyhyen matikan kirjoittanut!");
  });

  $("#floorbutton5").click(function (e) {
      $("#logo").text("Dynamomap: Viides kerros");
     $(".content").load("pages/floor5.html");
       $(".bubble").children().html("Tänne sulla ei oo asiaa!");
  });

  // bubble animation
  $(".dynamit-alt").mouseenter(function(){
    $(".bubble").addClass("bubble-is-open");
  });
  $(".dynamit-alt").mouseleave(function(){
    $(".bubble").removeClass("bubble-is-open");
  });

});
