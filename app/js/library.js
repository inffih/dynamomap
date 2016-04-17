//document ready
$("document").ready(function(e) {

  // bubble animation
  $(".dynamit").mouseenter(function(){
    $(".bubble").addClass("bubble-is-open");
  });
  $(".dynamit").mouseleave(function(){
    $(".bubble").removeClass("bubble-is-open");
  });

    //Tietojen lataus (Lainattavat kuva)
    $("#books").click(function (e) {
       $(".text").load("/pages/books.html");
        $( this ).attr( "src", "img/books_pink.png" );

        // Toisten kuvien vaihtaminen
        $("#open").attr("src", "img/open_white.png");
        $("#computer").attr("src", "img/computer_white.png");

    });


    //  Tietojen lataus (Aukioloajat kuva)
    $("#open").click(function (e) {
       $(".text").load("pages/open.html");
       $( this ).attr( "src", "img/open_pink.png" );

        // Toisten kuvien vaihtaminen
        $("#books").attr("src", "img/books_white.png");
        $("#computer").attr("src", "img/computer_white.png");
    });


    // Tietojen lataus (Linkit kuva) ja kuvan vaihtaminen
    $("#computer").click(function (e) {
       $(".text").load("pages/computer.html");
        $( this ).attr( "src", "img/computer_pink.png" );

        //Toisten kuvien vaihtaminen
        $("#open").attr("src", "img/open_white.png");
        $("#books").attr("src", "img/books_white.png");
    });


    // kuvien hoveri kun hiiri on päällä
    $( "#books, #open, #computer" ).hover(
        function(e) {
                $( this ).addClass( "imgshadow" );
        }, function(e) {
                $( this ).removeClass( "imgshadow" );
            });

});
