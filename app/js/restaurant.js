
/*var x = document.getElementById('ambient');
document.getElementById('volume').addEventListener('click',function(e) {
    e=e | window.event;
    x.muted = !x.muted;
    e.preventDefault();
}, false);*/

$("document").ready(function(e) {
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
