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
       $("#tekijat").fadeToggle(500);
       $(".rmdynamit").hide();    
    });
    //piilotetaan menu ja dynamiitti
    $(".menu2").click(function() {
        $(".menu, .dynamite").hide();
    });
    //backnappi
    $("#back").click(function() {
		$(".info").hide();
        $(".menu").fadeToggle(500);
    });
    $("#back").click(function() {
        $("#tekijat").hide();
        $(".rmdynamit").fadeIn(500);
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
    
    $(".rmdynamit").mouseenter(function(){
    $(".bubble").addClass("bubble-is-open");
  });
  $(".rmdynamit").mouseleave(function(){
    $(".bubble").removeClass("bubble-is-open");
  });
});
