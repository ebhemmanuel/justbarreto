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
	var navLinks			= $(".nav-links");
	var navLinksAnchors = $('.nav-links li');
	var ga            = $("#game-a");
	var gb            = $("#game-b");
	var logo          = $(".nav h4");
	var parts         = $(".parts");
	var navHeight			= $(".nav").height()+80;
	var content       = $(".content");
	var titles        = $(".title");
	var footer				= $("footer");
	var footerHeight  = $("footer").height();
	var titleHeight   = $(".title").height();
	var welcome		   	= $(".welcome");
	var height        = $(document).height();
	var myHeight      = $(document).height()-17;
	var message       = $(".message")
	var messageHeight = $(".message").height+height;
	var gameA         = $(".game-a");
	var gameAContent  = $(".game-content-a");
	// var gameAContent  = $(".game-a").find(".parts");
	var gameAText     = $(".game-a").find("p");
	var gameB         = $(".game-b");
	var gameBContent  = $(".game-content-b");
	// var gameBContent  = $(".game-b").find(".parts");
	var gameBText     = $(".game-b").find("p");
	var contentHeight = height-(340+footerHeight+38);

	// console.log($(document).height());
	// console.log($(window).height());
	// console.log(titleHeight);

	// parts.height(height);

	function flickerOut(target, delay){
		target.delay(delay)
 				 .animate({opacity:0},25)
 				 .animate({opacity:1},25)
 				 .animate({opacity:0},30)
 				 .animate({opacity:1},30)
 				 .animate({opacity:0},30)
 				 .animate({opacity:1},30)
 				 .fadeOut(750);
 				 // .fadeOut(250);
 	};

function flickerIn(target){
		target.animate({opacity:0},25)
 				 	.animate({opacity:1},25)
 				 	.animate({opacity:0},30)
 				 	.animate({opacity:1},30)
 				 	.animate({opacity:0},30)
 				 	.animate({opacity:1},30)
 				 	.fadeIn(750);
 				 // .fadeOut(250);
 	};

 	// When you click a link it fades away the intro message.

 	$("a").click(function(e){
		// e.preventDefault();
		flickerOut(message,0);
		welcome.css("display","block").delay(1200).fadeOut(800);
	});

	// $(".parts a").each(function(e){
	// 	this.click(function(){
	// 		this.hide();
	// 		console.log("hmm");
	// 	});
	// });

	// Makes the links stay active
	$(".nav-links a").click(function (e) {
		e.preventDefault();
	$(".nav-links a").addClass("current")
								   .not(this)
								   .removeClass("current");
	 });



	ga.click(function(e){

		gameA.stop(true, false)
		     .animate({opacity:1},1200)
				 .removeClass('hide');
		gameB.stop(true, false)
		     .addClass('hide')
		     .animate({opacity:0},800);

		// if(message.css()==message.css("display","block")){
		// 	gameA.stop(true, false)
		// 		   .delay(700)
		//        .animate({opacity:1},1200)
		// 		   .removeClass('hide');
		// 	gameB.stop(true, false)
		//        .addClass('hide')
		//        .animate({opacity:0},800);
		// }
		// else{
		// 	gameA.stop(true, false)
		//        .animate({opacity:1},1200)
		// 		   .removeClass('hide');
		// 	gameB.stop(true, false)
		//        .addClass('hide')
		//        .animate({opacity:0},800);
		// }

	});
	gb.click(function(e){
		gameB.stop(true, false)
				 .animate({opacity:1},1200)
				 .removeClass('hide');
		gameA.stop(true, false)
		     .addClass('hide')
				 .animate({opacity:0},800);
	});

	// shadow.click(function (e) {
	// 	e.preventDefault();
	// 	gameB.addClass("hide")
	// 			 .not(this)
	// 			 .removeClass("hide");
	//  });



	content.css("padding-bottom", "0px");
	gameA.css("opacity","0");
	gameB.css("opacity","0");
	// nav.css("height",myHeight+18);
	message.css("height", messageHeight);

	nav.animate({opacity:1}, 700)
		 .delay(300)
		 .animate({width:200},1000, "easeOutExpo");

	message.delay(1900)
 				 .animate({opacity:1, "margin-top":"22%"},900, "easeOutExpo");


 	navLinks.delay(2300)
 					.animate({display:"block", "margin-left":"0px", opacity:1},700, "easeOutQuart");


	logo.delay(2300)
			.animate({opacity:1},400);

	content.css("height","0px")
 							 .delay(1000)
 							 .animate({height:height},1800);

 	$(".footer").css("margin-top", "130px")
 							.delay(1200)
 							.fadeIn(400);
 		// gameA.click(function(){
 		// 	if
 		// });


	});

