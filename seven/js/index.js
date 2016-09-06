var position = [
	{
		top:'-6%',
		left:'2%',
		zIndex:10,
		transform:'scale(0.9)',
		transition:'all 0.8s ease',

	},
	{
		top:'8%',
		left:'31%',
		zIndex:30,
		transform:'scale(1)',
		transition:'all 0.8s ease',
	},
	{
		top:'-6%',
		left:'60%',
		zIndex:20,
		transform: 'scale(0.9)',
		transition:'all 0.8s ease',
	}
];

var l=0,m=1,r=2;
var c_bol= false;
cssFn(l,m,r)
$('.btn_l').click(function () {
	if (c_bol) {return}
		c_bol= true;
	l++;m++;r++;
	if (l>2) {l=0;}
	if (m>2) {m=0;}
	if (r>2) {r=0;}
	cssFn(l,m,r)
})
$('.btn_r').click(function () {
	if (c_bol) {return}
		c_bol= true;
	l--;m--;r--;
	if (l<0) {l=2;}
	if (m<0) {m=2;}
	if (r<0) {r=2;}
	cssFn(l,m,r)
})

function cssFn(l,m,r) {	
	var n = 0;
	for (var i = 0; i < 3; i++) {
		if (i==0) {n=l;}
		if (i==1) {n=m;}
		if (i==2) {n=r;}
		$('.pic').children().eq(i).css({
			left:position[n].left,
			top:position[n].top,
			zIndex:position[n].zIndex,
			transform:position[n].transform,
			transition:position[n].transition
		})
	}
	setTimeout(function () {
		c_bol =false;
	},1000)
}


// 鼠标拖拽图片效果
$img= $('.con2 .pic img');
var bol = false;
$img.mousedown(function (e) {
	var X = e.clientX;
	// console.log(x);
	$(document).mousemove(function (e) {
		var x = e.clientX-X;
		// console.log(x);
		if (x>$img.eq(0).width()/3&&!bol) {
			bol = true;
			$('.btn_l').click();
		}
		if (x<-$img.eq(0).width()/3&&!bol) {
			bol= true;
			$('.btn_r').click()
		}
	})
	//阻止默认事件
	e.preventDefault();
})
$(document).mouseup(function () {
	bol =false;
	$(document).off('mousemove','')
})

// 	$('.pic .l').css({
// 		left:position[l].left,
// 		top:position[l].top,
// 		zIndex:position[l].zIndex,
// 		transform:position[l].transform,
// 		transition:position[l].transition
// 	})
// 	$('.pic .m').css({
// 		left:position[m].left,
// 		top:position[m].top,
// 		zIndex:position[m].zIndex,
// 		transform:position[m].transform,
// 		transition:position[m].transition
// 	})
// 	$('.pic .r').css({
// 		left:position[r].left,
// 		top:position[r].top,
// 		zIndex:position[r].zIndex,
// 		transform:position[r].transform,
// 		transition:position[r].transition
// 	})
// }

// D7200视频播放
$vid = $('.con3 .D7200 embed');
$btn_play = $('.con3 .play img');
$btn_play.click(function () {
	$btn_play.hide()
	$('.con3 .play').hide();
	// $('.con3 .D7200 img').css('opacity',0)
	$vid.show();

})


var $Top = $('#Top');
$Top.on('click',function () {
	$(window).sTopMove(0);
})
// 回到顶部
$.fn.extend({
	sTopMove:function(end,fn) {
		var start = $(window).scrollTop();
		var change = end-start;
		var t = 0;
		var endT = 30;
		var timer = setInterval(function () {
			t++;
			if (t>=endT) {
				clearInterval(timer);
				fn && fn();
			}
			var sTop = easeOut(t,start,change,endT);
			$(window).scrollTop(sTop);
		},30)

		 function easeOut(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        }

	}
})








