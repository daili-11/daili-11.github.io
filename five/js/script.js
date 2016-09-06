
$(function(){
	var aImg = $('.moveImg');
	var aLi = $('.ul1 li')
	var timer = null;
	var index = 0;
	timer = setInterval(function(){show()},10000)
	
	function show(){
		index++;
		if(index>=aImg.length){index=0}
		aImg.css({"opacity":0,})
		var before = index;
		aImg.eq(before).css("opacity",1);
	 }

	 aLi.on('mouseenter',function(){
	 	aLi.removeClass('active');
	 	$(this).addClass('active');
	 })

	$(window).scroll(function(){
		
		// $(document).scrollTop()>200 ? $(".header_wrap_content_right_text").css('display','none'):$(".header_wrap_content_right_text").css('display','block');



		// $(document).scrollTop()>200 ? $('.header_wrap_content_right_more').css('display','none') :$('.header_wrap_content_right_more').css('display','block');


		// $(document).scrollTop()>500 && $(document).scrollTop()< 1800 ? $(".nav_content div").css('display','block') : $(".nav_content div").css('display','none');



		// $(document).scrollTop()>1245 && $(document).scrollTop()< 2400 ? $(".moveScroll div").css('display','block') : $(".moveScroll div").css('display','none');



		// $(document).scrollTop()>1800 && $(document).scrollTop()< 3080 ? $(".serf_2 div").css('display','block') : $(".serf_2 div").css('display','none');


		// $(document).scrollTop()>2750 && $(document).scrollTop()< 4245 ? $(".say_main img").css('display','block'): $(".say_main img").css('display','none');


		// $(document).scrollTop()>3780 && $(document).scrollTop()< 4865 ? $(".serf_move").css('display','block') : $(".serf_move").css('display','none');



		$(document).scrollTop()>4320 && $(document).scrollTop()< 6345 ? $(".serf_news_wrap div").css('display','block') : $(".serf_news_wrap div").css('display','none');


		$(document).scrollTop()>5660 && $(document).scrollTop()< 6780 ? $(".serf_move2").css('display','block') : $(".serf_move2").css('display','none');


		 
	})
	 


	 

})










