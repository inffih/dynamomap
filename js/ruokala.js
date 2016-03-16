//äänentoisto
function changeImage() {
    var image = document.getElementById('volume');
    if (image.src.match("images/volumeon.png")) {
        image.src="images/volumeoff.png";
    } else {
        image.src = "images/volumeon.png";
    }
}

var x = document.getElementById('taustahalina');
document.getElementById('volume').addEventListener('click',function(e) {
    e=e | window.event;
    x.muted = !x.muted;
    e.preventDefault();
}, false);

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
