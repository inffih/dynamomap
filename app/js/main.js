function changeImage() {
    var image = document.getElementById('volume');
    if (image.src.match("img/volumeon.png")) {
      image.src="img/volumeoff.png";
    }
     else {
       image.src ="img/volumeon.png"
    }
  }

$(document).ready(function(){

  // old audio mute function
   var x = $("#app_audio");
   document.getElementById('volume').addEventListener('click',function(e) {
       e=e | window.event;
       x.muted = !x.muted;
       e.preventDefault();
   }, false);

  // create audio mute-toggle here
  $(function(){
    $("#volume").click(function(){
      $("#app_audio").volume = 0;
    });
  });

});
