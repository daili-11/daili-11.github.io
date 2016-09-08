$.fn.extend({
		fang:function(style) {
			//var src= $(this).attr('src') 放同一张图片效果不佳

			//获取大图图片，如果没有用小图
		var src = $(this).attr('maxsrc')|| $(this).attr('src');


			//小图结构
		var $min =$('<div class="min"><div></div></div>')


		//默认宽高
		mSstyle = {
			minImgW:400,
			divW:100,
			maxW:500
		}

		//mSstyle里面添加style的属性，如果重复的会覆盖。 
		style = $.extend(mSstyle,style)

		//大图结构
		var $max = $('<div class="max"><img src="img/max.jpg" alt=""></div>')



		var $parent = $(this).parent();
		var $fang = $('<div class="fang"></div>');
		$fang.append($min).append($max);
		$min.append($(this));
		$parent.append($fang)


		//样式
		$fang.css({
			width:style.minImgW,
			height:style.minImgW,
			border:"5px solid black",
			position:"relative"
		})

		$min.css({
			width:style.minImgW,
			height:style.minImgW,
			// border:"5px solid black",
			position:"relative"
		})
		$(this).css('width',"100%");
		$max.css({
			width: style.maxW,
			height: style.maxW,
			border: "5px solid black",
			position: "absolute",
			top: 0,
			left: "100%",
			overflow: "hidden",	
			display: "none"
		})
		$min.find('div').css({
			width: style.divW,
			height: style.divW,
			background: "yellow",
			opacity: 0.5,
			cursor: "pointer",
			position: "absolute",
			top: 0,
			left: 0,
			display: "none"
		})
		/*$max.find('img').css({
			position: "absolute",
			left: 0,
			top: 0
		})*/



		//JS功能:
		var $div = $min.find('div');

		//根据比例计算大图宽度:
		var scale = $max.width()/$div.width();
		var maxW = $max.width()/$div.width()*$min.width();

		//设置大图宽度:
		$max.find('img').width(maxW)



		$min.on('mousemove',function (e) { 
			//var e = e || window.event; 不用兼容了


			var x = e.clientX-$min.offset().left-$div.width()/2;
			var y = e.clientY-$min.offset().top-$div.height()/2;
			if (x<0) {x=0;}

			if (x>$min.width()-$div.width()) {
				x=$min.width()-$div.width()
			}

			if (y<0) {y=0}
			if (y>$min.height()-$div.height()) {
				y=$min.height()-$div.height()
			}
			$div.css({
				left:x,
				top:y
			})
			$max.find('img').css({
				marginLeft:-x*scale,
				marginTop:-y*scale
			})	
		})


		/*

		$min.on('mousemove',function (e) { 
			var e = e || window.event;
			var w = $div.width();
			var h = $div.height();
			var x = e.clientX - $minDiv.position().left-5-w/2;
			var y = e.clientY - $minDiv.position().top-5-h/2;

			var scale = $maxDiv.width()/$div.width();

			if (x<0) {x=0;}

			if (x>$minDiv.width()-w) {
				x=$minDiv.width()-w
			}

			if (y<0) {y=0}
			if (y>$minDiv.height()-h) {
				y=$minDiv.height()-h
			}

			$img.css('left',-x*scale).css('top',-y*scale);
			$div.css('left',x).css('top',y);
			
		})

		*/





		/*$min.on('mouseenter',function () {  
			$div.show()
			$max.show()
			var scaleW = $maxDiv.width()/$div.width();
			$img.css("width",scaleW*$minDiv.width());		
		})*/
		//移进移出显示隐藏大图
		$min.hover(function () {  
			$div.show()
			$max.show()		
		},function() {
			$div.hide()
			$max.hide()
		})	
		/*$min.on('mouseleave', function (){  
			$div.hide()
			$maxDiv.hide()	
		})*/
	 }
})







/*结构:

<div class="min">
	<img src="img/min.jpg" alt="">
	<div></div>
</div>
<div class="max">
	<img src="img/max.jpg" alt="">
</div>

*/

/*样式:

.min{
		width: 400px;
		height: 400px;
		border: 5px solid black;	
		position: relative;	
	}
	.min img{width: 100%;}
	.max{
		width: 500px;
		height: 500px;
		border: 5px solid black;
		position: absolute;
		top: 8px;
		left: 418px;
		overflow: hidden;	
		display: none;	
	}
	.max img{
		position: absolute;
		left: 0;
		top: 0;
	}
	.min div{
		width: 100px;
		height: 100px;
		background: yellow;
		opacity: 0.5;
		position: absolute;
		top: 0;
		left: 0;
		display: none;
	}
*/
