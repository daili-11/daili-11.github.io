$(document).ready(function() {
	$wrap = $('.wrap');
	$data = $('.data');
	$header = $('.header');
	$content = $('.content');
	$footer = $('.footer');
	var div = document.querySelector('.load');
	bol = false;
	var json = {
		background:'pink',
		img:['../img/dishes.png','../img/dishes1.png','../img/dishes4.png','../img/dishes5.png']
	}
	loading(div,json);

	var left = $header.find(".left").text();
	var border = $header.find(".border").find("span").text();

	$header.find(".img2").on('touchstart',function () {
		$data.slideToggle(1000);
	})
	$header.find(".left").on('touchstart',function () {
		if (bol) {
			$header.find(".left").text(border);
			$header.find(".border").find("span").text(left);
			bol = false;
		}else {
			$header.find(".left").text(left);
			$header.find(".border").find("span").text(border);
			bol = true;
		}
		
	})
	

})