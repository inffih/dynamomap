$(document).ready(function(){

  $('#highlight_wrap').children().mouseover(function(){
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
