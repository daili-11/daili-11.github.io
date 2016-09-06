	


//一次性定时器
	function delayRun(code,time) {
	    var t = setTimeout(code,time);
	}
//loading 消失	
	function s1() {
		$('.wrap .loading').hide();
		$('#zhuye1').show();
		start() 
		
		
	}
	delayRun(s1,4000);



//第一个主页
	
	function start() {
		$logoi = $('#nav .logoi');
		$strong = $('#nav strong');
		$a = $('#nav a:nth-child(4) img');
		$a2 = $('#nav img:nth-child(5)'); 
		$a3 = $('#nav2 a:nth-child(1) img');
		$a4 = $('#nav2 a:nth-child(2) img');
		$a5 = $('#nav2 a:nth-child(3) img');
		$xia = $('#xia');
		swiper = new Swiper('.swiper-container',{
			mousewheelControl : true,
			pagination: '.swiper-pagination',
			paginationClickable :true,
			direction: 'vertical',

			paginationElement : 'div',
		    paginationBulletRender: function (index, className) {
			    return'<div class="'+className+'"><div>'+index+"</div></div>"
			},



			onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			    swiperAnimateCache(swiper); //隐藏动画元素 
			    swiperAnimate(swiper); //初始化完成开始动画
			}, 
			onSlideChangeStart: function(swiper){ 
			    swiperAnimate(swiper); //每个slide切换开始时也运行当前slide动画
			    if (swiper.activeIndex==2) {
					$logoi.attr('src','../img/logo2.png');
					$a.attr('src','../img/sou3.png');
					$a2.attr('src','../img/sou4.png');
					$a3.attr('src','../img/erji2.png');
					$a4.attr('src','../img/erjixiao.png');
					$a5.attr('src','../img/bofang2.png');
					$xia.attr('src','../img/fengxiang2.png');
					$strong.css('color','black');
				}else {
					$logoi.attr('src','../img/logo.png');
					$a.attr('src','../img/sou.png');
					$a2.attr('src','../img/sou2.png');
					$a3.attr('src','../img/erji.png');
					$a4.attr('src','../img/xiaoerji.png');
					$a5.attr('src','../img/bofang.png');
					$xia.attr('src','../img/fenxiang.png');
					$strong.css('color','white');
				}
				
			} 
		})
	}