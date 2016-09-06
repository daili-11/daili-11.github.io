	






//第er个主页
	
	var $xia = $('#xia');
	var swiper = new Swiper('.swiper-container',{
		mousewheelControl : true,
		 pagination: '.swiper-pagination',

		direction: 'vertical',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    if (swiper.activeIndex==2) {
			
				$xia.attr('src','../img/shangla.png');
			
			}else {
			
				$xia.attr('src','../img/xiala.png');
			
			}
			
		} 
	})