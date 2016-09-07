window.onload=function(){
	//。。。。。。。。。。。。。。。。。。。。。。。收藏
	var div3 = document.getElementsByClassName('div3');
//	console.log(div3.length);
	for (var i = 0; i < div3.length; i++) {
		div3[i].onclick=function(){
			if(this.className != "div31"){
				this.className ="div31"
				this.innerHTML = "取消"
			}else{
				this.className = "div3"
				this.innerHTML = "收藏"
			}
		}
	}
//.................................点赞	
   var ctop = document.getElementsByClassName('ctop1');
   //console.log(ctop.length)
   for (var i = 0; i < ctop.length; i++) {
   	ctop[i].onclick=function(){
   		if(this.className!="ctop11"){
   			this.className = "ctop11";
   		}else{
   			this.className = "ctop1"
   		}
   	}
   }
// ...........................................底部  
//	var 
   
 
	
	
	
	
	
}
