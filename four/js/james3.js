	




//第3个主页
	
	$xia = $('#xia');
	$logo = $('.logoi')
	swiper = new Swiper('#abc',{
		mousewheelControl : true,
		// pagination: '.swiper-pagination',
		simulateTouch : false,
		direction: 'vertical',
		// paginationClickable :true,

		// paginationElement : 'div',
	 //    paginationBulletRender: function (index, className) {
		//     return'<div class="'+className+'"><div>'+index+"</div></div>"
		// },


		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeStart: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    if (swiper.activeIndex==2) {   //从0开始
			
				$xia.attr('src','../img/xiala.png');
				$logo.attr('src','../img/yuan.png');
			
			}else if(swiper.activeIndex==3){
				$logo.attr('src','../img/logo2.png');
				$xia.attr('src','../img/shangla.png');
			}else{
				$xia.attr('src','../img/xiala.png');
				$logo.attr('src','../img/logo2.png');
			}
		} 
	})


// 点击文字对号出来
	$sp1 = $('#diyi4 .er .p3 .sp1');
	$sp2 = $('#diyi4 .er .p3 .sp2');

	$img1 = $('#diyi4 .er .p3 .pp2');
	$img2 = $('#diyi4 .er .p3 .pp3');

	$sp1.click(function () {
		$(this).prev('.pp2').toggle();
		$(this).next('.pp3').toggle();
	})
	$sp2.click(function () {	
		$(this).prev('.pp3').toggle();
		$(this).parent().find('img').eq(0).toggle();
	})

//点击tab切换
	$er1 = $("#diyi4 .er .er1");
	$div = $("#diyi4 .tab div");

	var $index = 0;
	$div.on("click",function() {	
		$div.css({
			borderColor: '#d8d8d8',
			color: '#d8d8d8',
		})
		$(this).css({
			borderColor: 'black',
			color: 'black',
		})
		$er1.hide(500);
		$er1.eq($(this).index()).show(500);
		// $index = $(this).index();
		// console.log($index)
	})

	

	$div6 = $("#diyi4 .tab input");
	$div6.on('click',function () {
		if ($index == 4) {
			$index = -1;
		}
		$index++;
		console.log($index)
		$div.css({
			borderColor: '#d8d8d8',
			color: '#d8d8d8',
		})
		$div.eq($index).css({
			borderColor: 'black',
			color: 'black',
		})
		$er1.hide(500);
		$er1.eq($index).show(500);
	})
	


	//第一个页面滚动
	swiper2 = new Swiper('#erji1',{
		direction: 'vertical',
		pagination: '.swiper-pagination',
		paginationClickable :true,
		paginationElement : 'div',
	    paginationBulletRender: function (index, className) {
		    return'<div class="'+className+'"><div>'+index+"</div></div>"
		},
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画   
		}, 
		onSlideChangeStart: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		     if (swiper.activeIndex == 1 || ($('#d2').css('display')!='none'&&swiper.activeIndex == 0) ||($('#d7').css('display')!='none'&&swiper.activeIndex == 1)|| ($('#d12').css('display')!='none'&&swiper.activeIndex == 2) ||($('#d17').css('display')!='none'&&swiper.activeIndex == 3) ||($('#d22').css('display')!='none'&&swiper.activeIndex == 4)) {
		     	$logo.attr('src','../img/yuan.png');
		     	$('#erji1 .swiper-pagination-bullet').css({
		     		borderColor: '#a96061'
		     	})
		     	$('#erji1 .swiper-pagination-bullet div').css({
		     		background: '#a96061'
		     	})
		     }else {
		     	$logo.attr('src','../img/logo2.png');
		     	$('#erji1 .swiper-pagination-bullet').css({
		     		borderColor: '#3c3c3c'
		     	})
		     	$('#erji1 .swiper-pagination-bullet div').css({
		     		background: '#3c3c3c'
		     	})
		     }
		} 
	})




//点击出现颜色框
	
	$dianji = $('.dianji');
	$meng = $('.meng');
	$dianji.click(function () {
		$meng.slideToggle("slow");
	})


//点击颜色框 切换页面


function  Tabfn($obj,_index,_this,_find) {
		$obj.hide(500);
		$meng.hide(500);
		$obj.eq(_this).fadeIn(500);
		if ( _find ==_index) {
			
			$logo.attr('src','../img/yuan.png');
			$('#erji1 .swiper-pagination-bullet').css({
	     		borderColor: '#a96061'
	     	});
	     	$('#erji1 .swiper-pagination-bullet div').css({
	     		background: '#a96061'
	     	})
		}else{
			$logo.attr('src','../img/logo2.png');
			$('#erji1 .swiper-pagination-bullet').css({
	     		borderColor: '#3c3c3c'
	     	});
	     	$('#erji1 .swiper-pagination-bullet div').css({
	     		background: '#3c3c3c'
	     	})
		}
	}

// ==============================  第yi个页面五个页面切换
	$mengs1 = $('.ye1 img');
	$ds = $('#f1 > div');

	$mengs1.each(function (i) {
		$(this).click(function () {
			Tabfn($ds,1,$(this).index(),$(this).index('.ye1 img'));
		})
	})

	

// ==============================  第er个页面五个页面切换
	$mengs2 = $('.ye2 img');
	$ds2 = $('#f2 > div');

	$mengs2.each(function (i) {
		$(this).click(function () {
			Tabfn($ds2,6,$(this).index(),$(this).index('.ye2 img'));
		})

	})

// ==============================  第san个页面五个页面切换
	$mengs3 = $('.ye3 img');
	$ds3 = $('#f3 > div');

	$mengs3.each(function (i) {
		$(this).click(function () {
			Tabfn($ds3,11,$(this).index(),$(this).index('.ye3 img'));
		})
	})

// ==============================  第4个页面五个页面切换
	$mengs4 = $('.ye4 img');
	$ds4 = $('#f4 > div');

	$mengs4.each(function (i) {
		$(this).click(function () {
			Tabfn($ds4,16,$(this).index(),$(this).index('.ye4 img'));
		})
	})


// ==============================  第5个页面五个页面切换
	$mengs5 = $('.ye5 img');
	$ds5 = $('#f5 > div');

	$mengs5.each(function (i) {
		console.log(i)
		$(this).click(function () {
			Tabfn($ds5,21,$(this).index(),$(this).index('.ye5 img'));
		})
	})





