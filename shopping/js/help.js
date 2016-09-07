var $li = $('.li');
var $p = $('p');
var $data = $('.data');
var $help = $('.help');
	$li.on('touchstart',function () {
		$p.not($p.eq($(this).index()).stop().slideToggle()).stop().slideUp();
		$data.not($data.eq($(this).index()).css({transform:"rotateX(0deg)"})).css({transform:"rotateX(180deg)"});
		

	})
