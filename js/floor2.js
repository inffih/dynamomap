function changeImage() {
    var image = document.getElementById('volume');
    if (image.src.match("../img/volumeon.png")) {
        image.src="../img/volumeoff.png";
    }
     else {
         image.src ="../img/volumeon.png"
    }
}

var x = document.getElementById('sound');
document.getElementById('volume').addEventListener('click',function(e) {
    e=e | window.event;
    x.muted = !x.muted;
    e.preventDefault();
}, false);