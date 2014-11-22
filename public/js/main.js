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

	function flicker(target, delay){
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

	content.css("padding-bottom", "0px");
	gameAText.css("opacity","0");
	gameBText.css("opacity","0");
	nav.css("height",myHeight+18);
	message.css("height", messageHeight);
	nav.animate({opacity:1}, 700)
		 .delay(300)
		 .animate({width:200},1000, "easeOutExpo");
		 // .animate({height:340},1000, "easeOutExpo");
	message.delay(1900)
 				 .animate({opacity:1, "margin-top":"22%"},900, "easeOutExpo");
$("a").click(function(e){
		e.preventDefault();
		flicker(welcome,0);
});

 	navLinks.delay(2300)
 					.animate({display:"block", "margin-left":"0px", opacity:1},700, "easeOutQuart");

$(".nav-links a").click(function (e) {
e.preventDefault();
$(".nav-links a").addClass("current")
								 .not(this)
								 .removeClass("current");
});
 	// navLinksAnchors.click(function(){
  //   navLinksAnchors.removeClass('current').css("background", "#7FEBD8");
  //   $(this).addClass('current').css("background","#F7F7F7");
  // });
  // $("a").mouseover(function(event) {
  // 	if
  // 		($(this).css!=$(this).css("background","#F7F7F7"))
  // 	{
  // 		$(this).css("background", "#76DECC");
  // 		console.log("This does not equal.");
  // 	}
  // 	else if
  // 		($(this).css==$(this).css("background","#F7F7F7"))
  // 	{
  // 		$(this).css("background","#F7F7F7")
  // 	}
  // });

	content.css("height","0px")
 							 .delay(1000)
 							 .animate({height:height},1800);
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

