(function(html){
	change()
	function change(){
		var w = html.clientWidth;
		if (w>=1366) {
			w=1366;
		}
		else if (w<=800) {
			w=800;
		}
		var size = (100*w/1200).toFixed(2);
		html.style.fontSize = size+"px"
	}
	window.addEventListener('resize',function () {
		change()
	})
})(document.documentElement)
	
