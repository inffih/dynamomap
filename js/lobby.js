$(document).ready(function(){

  $('#highlight_wrap').children().mouseover(function(){
    $(this).addClass('is-visible');
    $(this).mouseleave(function(){
      $(this).removeClass('is-visible');
    });
  });

});
