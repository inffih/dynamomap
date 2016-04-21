$(document).ready(function(){
  // bubble animation
  $(".dynamit-alt").mouseenter(function(){
    $(".bubble").addClass("bubble-is-open");
  });
  $(".dynamit-alt").mouseleave(function(){
    $(".bubble").removeClass("bubble-is-open");
  });
});
