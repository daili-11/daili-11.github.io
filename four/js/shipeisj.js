	


	var _width = parseInt(window.screen.width);
	var scale = _width/640;
	var ua = navigator.userAgent.toLowerCase();
	var result = /android (\d+\.\d+)/.exec(ua);
	if (result){
	var version = parseFloat(result[1]);
	if(version>2.3){
	document.write('<meta name="viewport" content="width=640, minimum-scale = '+scale+', maximum-scale = '+scale+', target-densitydpi=device-dpi">');
	}else{
	document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
	}
	} else {
	document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
	}