// $(".photoshop").text("Photoshop")
// $(".illustrator").text("Illustrator")
// $(".git").text("Git")
$(function(){
var link = $("#contact");
var con  = $(".contact");
	link.on('click',function(e){
		e.preventDefault();
			if (link.text() === ('Contact +')){
				con.fadeIn(400);
				link.text('Contact -');
			}
			else if
				(link.text() == ('Contact -')){
				con.fadeOut('400');
				link.text('Contact +');
			}
		});
	var nav 					= $(".nav");
	var navHeight			= $(".nav").height()+80;
	var content       = $(".content");
	var titles        = $(".title");
	var footer				= $("footer");
	var footerHeight  = $("footer").height();
	var titleHeight   = $(".title").height();
	var welcome		   	= $("h3");
	var height        = $(document).height();
	var myHeight      = $(document).height()-17;
	var gameA         = $(".game-a");
	var gameAContent  = $(".game-content-a");
	// var gameAContent  = $(".game-a").find(".parts");
	var gameAText     = $(".game-a").find("p");
	var gameB         = $(".game-b");
	var gameBContent  = $(".game-content-b");
	// var gameBContent  = $(".game-b").find(".parts");
	var gameBText     = $(".game-b").find("p");
	var contentHeight = height-(340+footerHeight+38);

	console.log($(document).height());
	console.log($(window).height());
	console.log(titleHeight);

	content.css("padding-bottom", "0px");
	gameAText.css("opacity","0");
	gameBText.css("opacity","0");
	nav.css("height",myHeight+18);
	welcome.css("top","55%");
	nav.animate({opacity:1}, 700)
		 .delay(300)
		 .animate({width:200},1000, "easeOutExpo");
		 // .animate({height:340},1000, "easeOutExpo");
	welcome.delay(2900)
 				 .animate({opacity:1,top:"45%"},800)
 				 .delay(800)
 				 .animate({top:"15%"},800, "easeOutExpo");
	$(".content").css("height","0px")
 							 .delay(1000)
 							 .animate({height:contentHeight},1800);
 	gameA.height(0)
 				 .animate({opacity:1},1400)
 				 .animate({height:130},800);
 	gameB.height(0)
 				 .animate({opacity:1},1400)
 				 .animate({height:130},800);
 	gameAText.animate({top:"45%"},600)
 						 .delay(1990)
 						 .animate({opacity:1},600);
 	gameBText.animate({top:"45%"},600)
 						 .delay(1990)
 						 .animate({opacity:1},600);


 	$(".footer").css("margin-top", "130px")
 							.delay(1200)
 							.fadeIn(400);
 		// gameA.click(function(){
 		// 	if
 		// });

 		gameA.click(function(){
 			gameAContent.toggle(900);
 		});
 		gameB.click(function(){
 			gameBContent.toggle(900);
 		});


	});

