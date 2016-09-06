(function(html){
	change()
	function change(){
		var w = html.clientWidth;
		if (w<1200) {w=1200}
		var size = (w/19.2).toFixed(2);
		html.style.fontSize = size+"px";
	}
	window.addEventListener('resize',function () {
		change()
	})
})(document.documentElement)