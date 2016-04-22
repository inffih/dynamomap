$(document).ready(function(e){
    
            $(".left_content, #leftback").click(function(e) {
                $(".leftpopup").fadeToggle(1000);
            });

            $(".right_content, #rightback").click(function(e) {
                $(".rightpopup").fadeToggle(1000);
            });

            $(".bottom_content, #bottomback").click(function(e) {
                $(".bottompopup").fadeToggle(1000);
            }); 

    });