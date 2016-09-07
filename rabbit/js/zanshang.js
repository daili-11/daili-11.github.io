window.onload=function(){
	var div3 = document.querySelector('.div3');
	var middle = document.querySelector('.middle');
	var gray = document.querySelector('.gray');
	var Btnx = document.querySelector('.middle p span');
	var span = document.querySelectorAll('.hh div span');
	var input = document.querySelectorAll('.middle input');
	var zan = document.querySelector('#zan')
	var hhh = document.querySelectorAll('.hh')
//	........................chu

	div3.onclick=function(){
		enterFn()		
	 }
	
	function enterFn(){
		gray.style.display = "block";
		startMove(gray,'opacity',90,function(){			
				middle.style.display = "block";
				var a = middle.offsetHeight
				middle.style.height = 0;
				startMove(middle,'height',a)
		})
	}
	
    function outFn(){
    	    var a = middle.offsetHeight
	    	startMove(middle,'height',0,function(){
	    		startMove(gray,'opacity',0,function(){
	    			middle.style.height = a + 'px';
	    			middle.style.display = "none";
	    			gray.style.display = "none"
	    		})
	    	})
    }
	
	Btnx.onclick=function(){	
		input[0].value = ""
		outFn()
	}
	$('.hh').on("touchstart",function(){
		enterFn()
		$('.middle input').eq(0).val($(this).find('span').html())
	})
	// for (var i = 0; i < hhh.length; i++) {
	// 	hhh[i].index = i;
	// 	hhh[i].addEventListener("touchstart",function(){
	// 		enterFn()
	// 		input[0].value = span[this.index].innerHTML;
	// 	})
	// }
	
	input[1].onclick = function(){
		if(input[0].value==""){
			alert('大哥，钱啊')
			return
		}
		var reg =/^20{2}(\.0{1,2})?$|^((1\d)|[1-9])\d?(\.\d{1,2})?$/;
		var bol = reg.test(input[0].value);
		if (bol) {
			
		}else{
			alert('输入金额都有问题，什么出息');	
			return;
		}
		
		outFn()
		input[0].value = "";
	}
	
	zan.onclick = function(){
		var imgNames = zan.src.split('/');
		var imgName = imgNames[imgNames.length-1];
		if(imgName != "zanshang2.jpg"){ //传入服务器会改变路径，判断时不能加路径
			zan.src = "../img/zanshang2.jpg"
		}else{
			zan.src = "../img/dashang.png"
		}
	}
}
