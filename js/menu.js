function changeImage() {
    var image = document.getElementById('volume');
    if (image.src.match("images/volumeon.png")) {
        image.src="images/volumeoff.png";
    } else {
        image.src = "images/volumeon.png";
    }
}

$("document").ready(function() {
   $(".menu2").click(function() {
       $("#tekijät").fadeToggle(500);
   });
    $(".menu2").click(function() {
        $(".menu").hide();
    });
    
    $("#back").click(function() {
        $(".menu").fadeToggle(500);
    });
    $("#back").click(function() {
        $("#tekijät").hide();
    });

    $("#erika").click(function() {
        $("#erikainfo").fadeIn(500);
    });
    $("#close").click(function() {
        $("#erikainfo").fadeOut(500);
    });
    
        
    $("#juhani").click(function() {
        $("#juhaninfo").fadeIn(500);
    });
    $("#close1").click(function() {
        $("#juhaninfo").fadeOut(500);
    });
    
        
    $("#juho").click(function() {
        $("#juhoinfo").fadeIn(500);
    });
    $("#close2").click(function() {
        $("#juhoinfo").fadeOut(500);
    });
       
    $("#kalle").click(function() {
        $("#kalleinfo").fadeIn(500);
    });
    $("#close3").click(function() {
        $("#kalleinfo").fadeOut(500);
    });
    
        
    $("#maiju").click(function() {
        $("#maijuinfo").fadeIn(500);
    });
    $("#close4").click(function() {
        $("#maijuinfo").fadeOut(500);
    });
    
        
    $("#mikko").click(function() {
        $("#mikkoinfo").fadeIn(500);
    });
    $("#close5").click(function() {
        $("#mikkoinfo").fadeOut(500);
    });
    
});