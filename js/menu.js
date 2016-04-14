$("document").ready(function() {
	//valikko esiin
   $(".menu, .dynamite").fadeIn(1500);
	//valikon hover ehosteet
	$(".menu1, .menu2").hover(function() {
		$(this).toggleClass("menutext1:hover");
		$(this).toggleClass("shadow");
	});
    //avataan tekijä-osio
	$(".menu2").click(function() {
       $("h1").css('margin-left', '380px');    
       $("h1").text('Dynamomap: Tekijät');
       $("#tekijät").fadeToggle(500);
   });
    //piilotetaan menu ja dynamiitti
    $(".menu2").click(function() {
        $(".menu, .dynamite").hide();
    });
    //backnappi
    $("#back").click(function() {
        $("h1").css('margin-left', '430px');
        $("h1").text('Dynamomap');
		$(".info").hide();
        $(".menu, .dynamite").fadeToggle(500);
    });
    $("#back").click(function() {
        $("#tekijät").hide();
    });
    
    $("#erika").mouseover(function() {
       $("h1").text('Erika Helin');
       $("h1").css('margin-left', '440px');    
    });
    $("#erika").mouseout(function() {
       $("h1").text('Dynamomap: Tekijät');
       $("h1").css('margin-left', '380px');    
    });
    
    $("#juhani").mouseover(function() {
       $("h1").text('Juhani Haverinen');
       $("h1").css('margin-left', '400px');    
    });
    $("#juhani").mouseout(function() {
       $("h1").text('Dynamomap: Tekijät');
       $("h1").css('margin-left', '380px');    
    });
    
    $("#janne").mouseover(function() {
       $("h1").text('Janne Rantanen');
       $("h1").css('margin-left', '400px');    
    });
    $("#janne").mouseout(function() {
       $("h1").text('Dynamomap: Tekijät');
       $("h1").css('margin-left', '380px');    
    });
    
    $("#kalle").mouseover(function() {
       $("h1").text('Kalle Sedergren');
       $("h1").css('margin-left', '400px');    
    });
    $("#kalle").mouseout(function() {
       $("h1").text('Dynamomap: Tekijät');
       $("h1").css('margin-left', '380px');    
    });
    
    $("#maiju").mouseover(function() {
       $("h1").text('Maiju Schreck');
       $("h1").css('margin-left', '400px');    
    });
    $("#maiju").mouseout(function() {
       $("h1").text('Dynamomap: Tekijät');
       $("h1").css('margin-left', '380px');    
    });
    
    $("#mikko").mouseover(function() {
       $("h1").text('Mikko Karjalainen');
       $("h1").css('margin-left', '400px');    
    });
    $("#mikko").mouseout(function() {
       $("h1").text('Dynamomap: Tekijät');
       $("h1").css('margin-left', '380px');    
    });
    
    //jokaisen oma divi avataan kuvaa klikkaamalla
    $("#erika").click(function() {
		$(".info").fadeOut();
        $("#erikainfo").fadeIn(500);
    });
    
    $(".close").click(function() {
        $("#erikainfo").fadeOut(500);
    });
    
        
    $("#juhani").click(function() {
		$(".info").fadeOut();
        $("#juhaninfo").fadeIn(500);
    });
    $(".close").click(function() {
        $("#juhaninfo").fadeOut(500);
    });
    
        
    $("#janne").click(function() {
		$(".info").fadeOut();
        $("#janneinfo").fadeIn(500);
    });
    $(".close").click(function() {
        $("#janneinfo").fadeOut(500);
    });
       
    $("#kalle").click(function() {
		$(".info").fadeOut();
        $("#kalleinfo").fadeIn(500);
    });
    $(".close").click(function() {
        $("#kalleinfo").fadeOut(500);
    });
    
    $("#maiju").click(function() {
		$(".info").fadeOut();
        $("#maijuinfo").fadeIn(500);
    });
    $(".close").click(function() {
        $("#maijuinfo").fadeOut(500);
    });
    
        
    $("#mikko").click(function() {
		$(".info").fadeOut();
        $("#mikkoinfo").fadeIn(500);
    });
    $(".close").click(function() {
        $("#mikkoinfo").fadeOut(500);
    });
    //hoverefekti kuville
    $("#kalle, #erika, #juhani, #janne, #mikko, #maiju").hover(function() {
		$(this).toggleClass("shadow");
	});
});