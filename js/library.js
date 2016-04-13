//document ready
$("document").ready(function(e) {
    
    // books(Lainattavat)image click event
    $("#books").click(function (e) {
       $(".text").load("../pages/books.html") 
    });
    
    //  open(aukioloajat)image click event 
    $("#open").click(function (e) {
       $(".text").load("../pages/open.html") 
    });
    
    // computer(Linkit)image click event
    $("#computer").click(function (e) {
       $(".text").load("../pages/computer.html") 
    });
    
    
    
});