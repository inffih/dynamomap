$(document).ready(function(){
$("#logo").text("Dynamomap: Aula");
  // bubble animation
  $(".dynamit").mouseenter(function(){
    $(".bubble").addClass("bubble-is-open");
  });
  $(".dynamit").mouseleave(function(){
    $(".bubble").removeClass("bubble-is-open");
  });

  jQuery(function($) {
    $('.cyclorama').cyclorama({
        useKeyboard: true
    });
  });

  $('#highlight_wrap').children().mouseenter(function(){
    var $thistext = "#" + $(this).attr("data-label");
    $($thistext).off();
    $(this).addClass('is-visible');
    $($thistext).addClass('label_highlight')
    $(this).mouseleave(function(){
      $(this).removeClass('is-visible');
      $($thistext).removeClass('label_highlight')
    });
  });

});
