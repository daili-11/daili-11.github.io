// 头部图片切换
$(function(){
	var aImg = $('.moveImg');
	var aLi = $('.ul1 li')
	var timer = null;
	var index = 0;
	timer = setInterval(function(){show()},8000)
	
	function show(){
		index++;
		if(index>=aImg.length){index=0}
		aImg.css({"opacity":0,})
		var before = index;
		aImg.eq(before).css("opacity",1);
	 }
// 头部左边导航栏
	aLi.on('mouseenter',function(){
	 	aLi.removeClass('li_active');
	 	$(this).addClass('li_active');
	})
	$(".headerBar_add").css('display','block');

})

// 插入视频
$('.video .play').click(function () {
	$('.video .bg').hide();
	$('.video .play').hide();
	$('embed').show();
})








