//document ready
$("document").ready(function(e) {
    
    // books image click event
    $("#books").click(function (e) {
       $(".text").load("../books.html") 
    });
    
    // open image click event 
    $("#open").click(function (e) {
       $(".text").load("../open.html") 
    });
    
    // computer image click event
    $("#computer").click(function (e) {
       $(".text").load("../computer.html") 
    });
    
    
    
});