$(function() {
			$(".card").on("click touchend", function miryoku(){
				$(this).toggleClass("active");
				$("body").toggleClass("active");
				$(this).off("click touchend", miryoku);
			});
	});
		
	$(function() {
			$(".background").on("click touchend", function back(){
				$(this).toggleClass("active");
				$(this).off("click touchend", back);
			});
	});
