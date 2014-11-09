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
});