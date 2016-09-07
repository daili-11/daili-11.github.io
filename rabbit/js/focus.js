window.onload=function(){
	$cancle = $('.cancle');
	$cancle.on("click",function(){
		var $li = $(this).parents('li');
		$li.slideUp()
	})
}
