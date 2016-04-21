$("document").ready(function(e) {
    $("#logo").text("Dynamomap: Ravintola");
  $("#shirt, #sback").click(function(e) {
      $("#dsodexo").fadeToggle(1000);
  });
    
    $(".dynamit").mouseenter(function(){
    $(".bubble").addClass("bubble-is-open");
  });
  $(".dynamit").mouseleave(function(){
    $(".bubble").removeClass("bubble-is-open");
  });
    
});
