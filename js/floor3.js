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
/*Matematiikkatehtävä
function openWindow() {
    var newWindow = window.open("floor3_math.html", "_blank", "width=960, height=720");
}

function mathMouseOver() {
    var image = document.getElementById('math');
       if (image.src.match("img/jamk_promo.jpg") {
        image.src = "img/aula.jpg";
    } else {
        image.src = "img/jamk_promo.jpg";
    }
}

function mathMouseOut() {
    var image = document.getElementById('math');
       if (image.src.match("img/aula.jpg")) {
        image.src = "img/jamk_promo.jpg";
    } else {
        image.src = "img/jamk_promo.jpg";
    }
}

        $("document").ready(function(e) {
            $("#math").click(function(e) {
                $("#floorpopup").fadeToggle(1000);
            });
        });
*/
//Documentti luotu
$("document").ready(function(e) {
    
    // Näytä tekstiä
    $("#math").click(function (e) {
       $(".leftup").load("3floor_math.html");
        $("#math").fadeOut(3000)
    });
    
    
});
