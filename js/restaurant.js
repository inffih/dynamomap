//äänentoisto
function changeImage() {
    var image = document.getElementById('volume');
    if (image.src.match("img/volumeon.png")) {
        image.src="img/volumeoff.png";
    } else {
        image.src = "img/volumeon.png";
    }
}

var x = document.getElementById('ambient');
document.getElementById('volume').addEventListener('click',function(e) {
    e=e | window.event;
    x.muted = !x.muted;
    e.preventDefault();
}, false);

function kokkiMouseOver() {
    var image = document.getElementById('cook');
       if (image.src.match("img/cook_colourless.png")) {
        image.src="img/Cook_colored.png";
    } else {
        image.src = "img/Cook_colourless.png";
    }
}

function kokkiMouseOut() {
    var image = document.getElementById('cook');
       if (image.src.match("img/cook_colored.png")) {
        image.src="img/Cook_colored.png";
    } else {
        image.src = "img/cook_colourless.png";
    }
}

$("document").ready(function(e) {
    
    $("#shirt, #sback").click(function(e) {
        $("#dsodexo").fadeToggle(1000);
    });

  $('body').css('background-image', 'url(img/ruokala.jpg)');
    
});
    




