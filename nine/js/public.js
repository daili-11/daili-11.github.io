(function(html){
	change()
	function change(){
		var w = html.clientWidth;
		if (w>=1200) {
			w=1200;
		}
		else if (w<=360) {
			w=360;
		}
		var size = (100*w/1200).toFixed(2);
		html.style.fontSize = size+"px"
	}
	window.addEventListener('resize',function () {
		change()
	})
})(document.documentElement)

