function changeImage() {
    var image = document.getElementById('volume');
    if (image.src.match("images/volumeon.png")) {
        image.src="images/volumeoff.png";
    } else {
        image.src = "images/volumeon.png";
    }
}

var audio = document.getElementById('tausta');
function mute() {
    audio.muted = true;
}
//kokkitoiminnot
function openWindow() {
    var newWindow = window.open("sodexo/sodexo_info.html", "_blank", "width=960, height=720");
}

function kokkiMouseOver() {
    var image = document.getElementById('kokki');
       if (image.src.match("images/kokki2.png")) {
        image.src="images/kokki.png";
    } else {
        image.src = "images/kokki2.png";
    }
}

function kokkiMouseOut() {
    var image = document.getElementById('kokki');
       if (image.src.match("images/kokki.png")) {
        image.src="images/kokki2.png";
    } else {
        image.src = "images/kokki.png";
    }
}
