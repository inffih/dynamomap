//document ready
$("document").ready(function(e) {
    
    // books image click event
    $("#books").click(function (e) {
       $(".text").load("../pages/books.html") 
    });
    
    // open image click event 
    $("#open").click(function (e) {
       $(".text").load("../pages/open.html") 
    });
    
    // computer image click event
    $("#computer").click(function (e) {
       $(".text").load("../pages/computer.html") 
    });
    
    
    
});