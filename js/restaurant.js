//äänentoisto
function changeImage() {
    var image = document.getElementById('volume');
    if (image.src.match("images/volumeon.png")) {
        image.src="images/volumeoff.png";
    } else {
        image.src = "images/volumeon.png";
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
       if (image.src.match("images/cook_colourless.png")) {
        image.src="images/Cook_colored.png";
    } else {
        image.src = "images/Cook_colourless.png";
    }
}

function kokkiMouseOut() {
    var image = document.getElementById('cook');
       if (image.src.match("images/cook_colored.png")) {
        image.src="images/Cook_colored.png";
    } else {
        image.src = "images/cook_colourless.png";
    }
}

$("document").ready(function(e) {
    
    $("#shirt, #sback").click(function(e) {
        $("#dsodexo").fadeToggle(1000);
    });

  $('body').css('background-image', 'url(images/ruokala.jpg)');
    
});
    




