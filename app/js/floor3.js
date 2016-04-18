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
MIKSI TÄMÄKÄÄN EI TOIMI
*/
/*
        $("document").ready(function(e) {

        });
$(document).ready(function(){
    
    $('li').click(
    function() { $('#floorpopup').fadeIn(3000); },
    function() { $('#floorpopup').fadeOut(13000); }
);
$("ul li a").click(function() { $(this).parent().next().toggle("fast"); });
}
    //  Tietojen lataus Tietokonekuva
    $("#computer").click(function (e) {
       $(".leftup_3,").load("pages/floor3_labra.html");
       $( this ).attr( "src", "img/dualmonitors.jpg" );

    });
*/
$(document).ready(function(e){
            $(".leftdown_3, #popback").click(function(e) {
                $(".floorpopup").fadeToggle(1000);
            });

            $(".rightup_3, #popback2").click(function(e) {
                $(".floorpopup2").fadeToggle(1000);
            });

            $(".rightdown_3, #popback3").click(function(e) {
                $(".floorpopup3").fadeToggle(1000);
            }); 

    });

