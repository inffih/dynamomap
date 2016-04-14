// VOLUME BUTTON
function changeImage() {
    var image = document.getElementById('volume');
    if (image.src.match("img/volumeon.png")) {
        image.src="img/volumeoff.png";
    } else {
        image.src = "img/volumeon.png";
    }
}

var x = document.getElementById('typing');
document.getElementById('volume').addEventListener('click',function(e) {
    e=e | window.event;
    x.muted = !x.muted;
    e.preventDefault();
}, false);




//FADE OUT
$("document").ready(function(e) {
    
    // Näytä tekstiä
    $("#math").click(function (e) {
       $(".leftup").load("3floor_math.html");
        $("#math").fadeOut(3000)
    });
    
    
});