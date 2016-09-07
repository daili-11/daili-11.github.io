$(document).ready(function() {
	$wrap = $(".wrap");
	var t = 0;
	t +=1;
	var timer =setInterval(function () {
		
		if (t>=3) {
			clearInterval(timer);

		}
	},1000)
})