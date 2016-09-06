$.fn.extend({
	mousewheel:function(cb) {
		if (navigator.userAgent.indexOf("Firefox")>-1) {
			$(this).get(0).addEventListener("DOMMouseScroll",fn);
		}else{
			$(this).get(0).onmousewheel = fn;
		}
		function fn(e) {
			var e = e || window.event;
			var down = true;
			if (e.detail) {
				down=e.detail>0;
			}else {
				down=e.wheelDelta<0;
			}
			cb.apply($(this).get(0),[e,down])
			if (e.preventDefault) {
				e.preventDefault();
			}
			return false;
		}
	}
})
$(document).ready(function() {
	$.fn.fullpage({
		anchors: ['page1', 'page2'],
		controlArrowColor:'transparent',
		// controlArrow:false,
		// loopHorizontal:false,
		// resize:true
		afterRender:function(){
			var $li = $('#top').find('ul').find('li');
			$li.eq(1).removeClass('rotate').addClass('rotate');
			$li.eq(0).fadeOut(250,function() {
				$li.eq(0).fadeIn(250,function() {
					$li.eq(0).fadeOut(250,function() {
						$li.eq(0).fadeIn(250,function() {
							$li.eq(1).removeClass('rotate');
						});
					})
				});
			});
		},
		afterLoad:function(anchorLink,index) {
			if(index == "1"){
				var $li = $('#top').find('ul').find('li');
				$li.eq(1).removeClass('rotate').addClass('rotate');
				$li.eq(0).fadeOut(250,function() {
					$li.eq(0).fadeIn(250,function() {
						$li.eq(0).fadeOut(250,function() {
							$li.eq(0).fadeIn(250,function() {
								$li.eq(1).removeClass('rotate');
							});
						})
					});
				});
			}
			var hf = location.href;
			var index = hf.split("#");
			var bol = true;
			for (var i = 0; i < index.length; i++) {
				if (index[i]=="page2") {
					bol = false;
				}
			}
			if (bol) {$(".page2").css("top",0);return}
			$('.page2').mousewheel(function(e,down) {
				if (down && $(".page2").css("top")!= "-5.40rem") {
					$(".page2").css("top","-5.40rem")
				}else {
					if ($(".page2").position().top!=0) {e.stopPropagation()}
					$(".page2").css("top",0);
				}
			})
		}
	});
	// controlArrowColor
	$('.controlArrow').click(function() {
		return false;
	})
});
/***********************分割线*****************************************/
var size = 0;
(function(html){
change()
function change(){
var w = html.clientWidth;
if (w>1440) {w=1440}
size = 100*(w/1440).toFixed(2);
html.style.fontSize = size+"px"
}
window.addEventListener('resize',function () {
change()
})
})(document.documentElement)

var inner = document.querySelector('#inner');
var a = document.querySelectorAll('#inner a');
var innerW = inner.offsetWidth;
var k = 0;

// a标签的总长度
for (var i = 0; i < a.length; i++) {
	k += a[i].offsetWidth;
	var lr = (innerW-k)/a.length;
	for (var j = 0; j < a.length; j++) {
	//每个a标签分到的margin值;
		a[j].style.marginLeft = ((lr/2-1))/size+"rem";
		a[j].style.marginRight = (lr/2)/size+"rem";
	}
}


var link = $('.link');
link.click(function() {
	if ($(this).find('a').css('color') == '#dc4e4e') {return}
	link.removeClass('sel');
	$(this).addClass('sel');
})

// tabFn($('.tab1 .img'));
// tabFn($('.tab2 .img'));
// tabFn($('.tab3 .img'));
// tabFn($('.tab4 .img'));
// tabFn($('.tab5 .img'));
// tabFn($('.tab6 .img'));
// function tabFn($img){
// 	var before = 1;
// 	var lbtn = $img.parent().find('.lbtn');
// 	var rbtn = $img.parent().find('.rbtn')
// 	$img.each(function(i){var $_This = $(this);$_This.css({transform:'translate3d('+4.08*($(this).index())+'rem,0,0)'});})
// 	$img.eq(before).css({zIndex:"1",transform: 'translate3d(4.06rem,0,0) scale(1.5)'})
// 	$img.eq(before).find('.bfdiv').hide();
// 	//左右按钮
// 	lbtn.click(function() {
// 		before --;
// 		move()
// 	})
// 	rbtn.click(function() {
// 		before ++;
// 		move(true)
// 	})
// 	//移动函数
// 	function move(where) {
// 		$img.parent().parent().find('span').addClass('scale');
// 		rbtn.show();
// 		lbtn.show();
// 		if (before<=0) {lbtn.hide()}
// 		else if (before>=$img.length-1) {rbtn.hide()}
// 		$img.css({zIndex:"0"})
// 		$img.find('.bfdiv').show();
// 		$img.eq(before).find('.bfdiv').hide();
// 		$img.each(function(i) {
// 			//向右
// 			if (where) {$(this).not($img.eq(before)).css({transform: 'translate3d('+(4.08*($(this).index())-4.08*(before-1))+'rem,0,0)'})}
// 			//向左
// 			else {$(this).not($img.eq(before)).css({transform: 'translate3d('+(4.08*($(this).index()+1)-4.08*before)+'rem,0,0)'})}
// 		})
// 		//当前张效果
// 		$img.eq(before).css({zIndex:"1",transform: 'translate3d(4.06rem,0,0) scale(1.5)'})
// 		$img.parent().parent().find('span').text($img.eq(before).find('img').attr('data_index'));
// 		// console.log($img.parent().parent().find('span'));
// 		setTimeout(function(){$img.parent().parent().find('span').removeClass('scale');},500)
// 	}
// 	$img.click(function(){
// 			//获取点击图片是左边一张还是右边一张
// 			var  num = $(this).index()-before;
// 			//记录当前张
// 			before = $(this).index();
// 		 	$img.each(function(){if (num>0) {move(true)}else if(num<0){move()}})
// 	})
// }






// var $img = $('.img');
// $img.each(function(i){
// 	 $(this).css('left',4.08*i+"rem");
// 	 $(this).click(function(){
// 	 	$img.removeClass("changeR changeL");
// 	 	for (var d = 0; d < $img.length; d++) {
// 	 		$img.eq(d).css('left',4.08*d+"rem")
// 	 	}
// 	 		$img.not($(this)).css({
// 	 			transform: 'translate3d('+(-4.08*($(this).index()-1))+'rem,0,0)'
// 	 		})
// 		 		$(this).addClass("changeR");
// 		 		$(this).css({
// 		 		left: '3.06rem',
// 		 		transform: 'translate3d(0,0,0)'
// 	 		})
// 	 })
// })









setTimeout(function() {
	tabFn($('.tab1'));
	tabFn($('.tab2'));
	tabFn($('.tab3'));
	tabFn($('.tab4'));
	tabFn($('.tab5'));
	tabFn($('.tab6'));
},1000);
function tabFn($objtab){
	var $obj = $objtab.find(".b_inner");
	var $img = $obj.find('.img');
	var before = 1;
	console.log($objtab.children());
	$img.each(function(i){var $_This = $(this);$_This.css({left:$_This.find("img").width()*(i)+50});})
	$img.eq(before).css({zIndex:"1",transform:'scale(1.5)'})
	$obj.css({
		left:-($img.find('img').width()*(before-1))+$img.find('img').width()/2
	})

	//移动函数
	function move() {
		$objtab.find('span').addClass('scale');
		$img.css({zIndex:"0",transform:'scale(1)'})
		$obj.animate({
			left:-($img.find('img').width()*(before-1))+$img.find('img').width()/2
		})
		//当前张效果
		$img.eq(before).css({zIndex:"1",transform: 'scale(1.5)'})
		$img.parent().parent().find('span').text($img.eq(before).find('img').attr('data_index'));
		setTimeout(function(){$objtab.find('span').removeClass('scale');},500)
	}
	$img.click(function(){
			//获取点击图片是左边一张还是右边一张
			var  num = $(this).index()-before;
			//记录当前张
			before = $(this).index();
			move();
	})
}
