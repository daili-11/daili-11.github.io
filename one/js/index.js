$(function(){
		var $header = $('#header')
		var $wrap = $('.wrap')
		var $inner=$('.wrap .inner img')
		var $tab = $('.tab');
		var $left =$('#left')
		var $right =$('#right')
		var $dd=$('#center p')
		var $div = $('.gai')
		var $gai = $div.find('.gai1')
		var $watch = $gai.find('p')
		var $play = $watch.eq(2)
		var $radius=$dd.eq(1).find('span')
		var $oradius = $('.radius')
		var $oimg = $('.radius div')
		var $pp = $oimg.find('p')
		var $audio = $('video')
		var $number = $('.number img')
		var $person = $('.person')
		//大图切换部分
		var i = 0;
		var timer = null;
	$number.eq(2).on('click',function () {
		$number.eq(2).hide();
		$audio.show();
	})
	for (var k=0;k<$inner.length;k++) {
		//有几张大图就添加几个小圆点按钮
		var $span = $('<span></span>');
		$tab.append($span);
	}
	var $span = $('.tab span');
	$play.on('click',function () {
		$div.hide()
		$oradius.show()
		loadImageFn($inner,'',function(){
			play();
			listTab();
			$span.eq(0).css('background','red');

			$oimg.eq(0).css({
				transform : 'scale(1.2)',
				zIndex:'99',
				marginTop:'0.8rem',
				backgroundImage:'url(../img/inner_01.png)'
			});
			$pp.eq(0).css('opacity','0');
			//点击圆点切换图片 --start
			$span.on('click',function () {
				timer && clearInterval(timer)
				if (i != $(this).index()) {
					fadeTab($(this).index(),i,1000);
				}
				i = $(this).index();
				play();
			})
			//--end

			//点击小图片切换图片 --start
			$oimg.on('click',function () {
				timer && clearInterval(timer)
				if (i != $(this).index()) {
					fadeTab($(this).index(),i,1000);
				}
				i = $(this).index();
				play();
			})
			//--end
		})
	})
	//图片预加载:提高用户体验的一个很好的方法,增强网站的性能与可用性。
	function loadImageFn (arr,fn,over) {
		var index = 0;//加载第几张
		for (var i=0; i < arr.length; i++) {
			var img = new Image();//定义一个图片的对象
			img.src = arr.eq(i).attr('src');//设置路径
			img.onload = function(){
				index ++; //加载
				if (index == arr.length) {//图片加载完成后
					over && over();//结束回调函数
				}
				fn && fn(index);//过程回调函数
			}
		}
	}
	$inner.parent().mousedown(function(e){
		var disX = e.pageX;
		$(document).on('mousemove',function(e){
			var $which =  e.pageX-disX>0;
			whichFn($which);
		})
		e.stopPropagation();//灭掉click事件的冒泡
		e.preventDefault();//取消点击的默认行为
	})
	$(document).mouseup(function(){
		$(document).off('mousemove');
		$inner.bolL = false;
		$inner.bolR = false;
		play();
	})
	//用户操作切换大图（左右移动）
	function whichFn($which){
		//判断右移
		if($inner.bolR && $which){return}
		//判断左移
		if($inner.bolL && !$which){return}
		timer && clearInterval(timer)
		var per = i;
		if ($which) {
			//记录右移
			$inner.bolR = true;
			$inner.bolL = false;
			i++;
			if (i>3) {per = 3;i = 0;}
		}else{
			//记录左移
			$inner.bolR = false;
			$inner.bolL = true;
			i--;	
			if (i<0) {per = 0;i = 3;}
		}
		//执行淡入淡出
		fadeTab(i,per,1000);
	}
	//初始化大图的圆点样式(响应式)
	function listTab(){
		//初始化大图切换最外框的高度
		$wrap.css({
			height:$inner.height()
		})
		//圆点大小
		var sW = 10;
		//圆点父级大小
		var tW = 70;
		//圆点父级样式
		$tab.css({
			height:tW/$inner.height()*100+'%',
			margin:'auto'
		});
		//圆点样式
		$span.css({
			background:'orange',
			opacity:'.5',
			float:'left',
			height:sW/$tab.height()*100+'%',
			borderRadius:'50%',
			marginRight:sW/$tab.height()*100+'%'
		})
		$span.css({
			width:$span.height(),
			marginTop:($tab.height()-$span.height())/2
		});
		//最后一个圆点样式
		$span.eq($inner.length-1).css({
			marginRight:0
		})
		//圆点父级宽度样式
		$tab.css('width',$span.width()*($inner.length*2))
	}
	//淡入淡出动画
	function fadeTab(k,per,t) {
		//设置只有上一张显示，其他隐藏
		$inner.not($inner.eq(per)).css('display','none');
		//当前张淡入
		$inner.eq(k).css('z-index',1).stop().fadeIn(t)
		//上一张淡出
		$inner.eq(per).stop().fadeOut(t);
		//设置圆点对应样式
		$span.not($span.eq(k).css('background','red')).css('background','orange');
		$span.not($span.eq(k).css('background','red')).css('background','orange');
		$oimg.css({
			transform:'scale(1)',
			zIndex:'1',
			marginTop:'1rem',
			backgroundImage:'none'
		})
		$oimg.eq(k).css({
			transform:'scale(1.2)',
			zIndex:'999',
			marginTop:'0.8rem',
			transition:'500ms',
			backgroundImage:'url(../img/inner_01.png)'
		})
		$pp.css('opacity','0.7');
		$pp.eq(k).css('opacity','0');
	}
	//自动淡入淡出
	function play(){
		clearInterval(timer)
		var per = 0;
		timer = setInterval(function(){
			//记录上一张
			per = i;
			//记录下一张
			i++;
			if (i>=4) {
				per = 3
				i = 0;
			}
			//执行动画
			fadeTab(i,per,1000);
		},3000);
	}

	//回到顶部
	$('#top').click(function () {
		var h = $('body').scrollTop();
		var t = setInterval(function () {
			h-=50
			if (h<=0) {clearInterval(t);h=0}
			$('body').scrollTop(h)
		},30)
	})
})