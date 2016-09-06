(function(html){
	change()
	function change(){
		var w = html.clientWidth;
		if (w<1200) {w=1200}
		// 此处的375是设计图纸的宽度
		// var size = 100*(w/375).toFixed(2);
		var size = 100*(w/1920).toFixed(2);
		html.style.fontSize = size+"px"
	}
	window.addEventListener('resize',function () {
		change()
	})
})(document.documentElement)

