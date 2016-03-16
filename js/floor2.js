function changeImage() {
    var image = document.getElementById('volume');
    if (image.src.match("images/volumeon.png")) {
        image.src="images/volumeoff.png";
    }
     if (image.src.match("images/volumeoff.png")) {
        image.src = "images/volumeon.png";
    }
}