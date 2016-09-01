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
});
$.fn.extend({
		 scrollFn:function() {
		 	var $wrap = $(this);
		 	//改变结构
		 	var $con = $('<div></div>')
		 	$con.html($wrap.html());
		 	var $scroll = $('<div><div></div><div></div></div>');

		 	$wrap.html('');
		 	$wrap.append($con).append($scroll);

		 	var $strip = $scroll.find('div').eq(1);


		 	//添加样式
		 	$con.css({
		 		width:"92%",
		 		position: "absolute",
		 		top: 0
		 	})

		 	$scroll.css({
		 		width: "8%",
		 		height: "100%",
		 		position: "absolute",
		 		right: 0,
		 		top: 0,
		 		zIndex:"3"
		 	})
		 	$scroll.find('div').eq(0).css({
		 		width: "0.04rem",
		 		background: "#6c99a7",
		 		position: "absolute",
		 		left:0,
		 		right:0,
		 		margin:"auto",
		 		height:"100%"
		 	});
		 	$strip.css({
		 		width: "0.12rem",
		 		background: "#fff",
		 		borderRadius:'0.1rem',
		 		position: "absolute",
		 		right: 0,
		 		left:0,
		 		margin:"auto"
		 	})


		 	//------自定义滚动条功能方法

		 	//获取比例
		 	var scale = $con.get(0).offsetHeight/$wrap.get(0).offsetHeight;
		 	console.log($con.get(0).offsetHeight)
		 	console.log($wrap.get(0).offsetHeight)
//		 	if (scale<1) {
//		 		$scroll.hide()
//		 		$con.css("paddingRight",0)
//		 	}
		 	//根据比例计算滚动条高度
		 	var stripH = $scroll.height()/scale;
		 	//限制滚动条高度不能小于30PX
		 	if (stripH<30) {stripH = 30}
		 		console.log(stripH)
		 	$strip.height(stripH);

		 	//拖拽滚动条方法
		 	$strip.on('touchstart',function(e) {
		 		var disY = e.clientY - $(this).position().top;
		 		$(document).on("touchmove",function(e) {
		 			var y = e.clientY - disY;
		 			moveFn(y)
		 		})
		 		e.stopPropagation()//阻止冒泡
		 		e.preventDefault()//阻止默认事件
		 	})

		 	// addEventListener() - on()
		 	// removeEveentListener() - off()

		 	$(document).on("touchend",function () {
		 		//移除事件方法
		 		$(document).off("touchmove")
		 	})

		 	//移动函数
		 	function moveFn(y) {
		 		if (y<0) {y = 0}
		 		var b = $scroll.height()-$strip.height();
		 		if (y>b) {y=b}

		 		var scale = ($scroll.height()-$strip.height())/($con.height()-$wrap.height());
		 		$con.css('top',-y/scale)
		 		$strip.css("top",y);
		 	}

		 	//滚轮事件，引入了已封好得JQ方法
		 	$wrap.mousewheel(function (e,down) {
		 		if (down) {
		 			var y = $strip.position().top+10
		 		}else{
		 			var y = $strip.position().top-10
		 		}
		 		moveFn(y)
		 	})

		 	$scroll.on("mousedown",function (e) {
		 		var y = e.clientY-$scroll.offset().top-$strip.height()/2;
		 		moveFn(y);
		 	})
		 }
	});