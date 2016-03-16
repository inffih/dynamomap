function changeImage() {
    var image = document.getElementById('volume');
    if (image.src.match("images/volumeon.png")) {
        image.src="images/volumeoff.png";
    } else {
        image.src = "images/volumeon.png";
    }
}

/* function openWindow() {
    var newWindow = window.open("sodexo/sodexo_info.html", "_blank", "width=960, height=720");
}

function openWindow() {
    var newWindow = window.open("sodexo/sodexo_info.html", "_blank", "width=960, height=720");
} */