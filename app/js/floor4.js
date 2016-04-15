//FADE OUT
$("document").ready(function(e) {

    // Näytä tekstiä
    $("#math").click(function (e) {
       $(".leftup").load("3floor_math.html");
        $("#math").fadeOut(3000)
    });


});
