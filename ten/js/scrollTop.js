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



