$(document).ready(function(e){
    
            $(".leftdown, #popback4").click(function(e) {
                $(".floorpopup4").fadeToggle(1000);
            });
            $(".rightup, #popback5").click(function(e) {
                $(".floorpopup5").fadeToggle(1000);
            });
            $(".rightdown, #popback6").click(function(e) {
                $(".floorpopup6").fadeToggle(1000);
            });
            $(".leftup, #popback7").click(function(e) {
                $(".floorpopup7").fadeToggle(1000);
            });
    
    /* Math answer
    $("#check").click(function(){
        if {
            $("#answer") = 
        }
        $("#rightanswer").text("Oikea vastaus on 144")
    }); */
    
        }); 
    function myFunction() {
    var answer, right;
    answer = Number(document.getElementById("answer").value);
    if (isNaN(answer)) {
        right = "Syötä vain lukuja!";
    } else if (answer < 144){
        right = "Luku on suurempi!";
    } else if (answer > 144){
        right = "Luku on pienempi!";
    }
    else{
        right = "Oikein!";
    }
    document.getElementById("rightanswer").innerHTML = right;
}