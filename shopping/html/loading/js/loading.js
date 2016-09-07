
function loading(obj,options) {
	var ops = {
		background:'red',
		img:[],
	}
	for(var key in options){
		ops[key] = options[key];
	}
	var index = 0;
	for (var i = 0; i < ops.img.length; i++) {
		var img = new Image();
		img.src = ops.img[i];
		img.onload = function () {
			index++
			if (index==ops.img.length) {
				setTimeout(function () {
					obj.style.display = 'none';
				},1000)
			}else {
				obj.style.background = ops.background
				obj.innerHTML = '<div class="loader"><div class="loader-inner ball-pulse-rise"><div></div> <div></div><div></div><div></div><div></div></div></div>'
			}
		}
	}
}