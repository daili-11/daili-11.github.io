//显示动画人物的div
var apper = document.querySelectorAll('.wrap .apper');
//时间进度条div
var progress = document.querySelector('.progress');
//分数div
var s = document.querySelector('.score');
//开始游戏按钮
var btn = document.querySelectorAll('.btn');
//显示结果分数
var p = document.querySelector('#p');
//定位显示动画人物的div
var lArr =['31.25%','59.625%','33.125%','62.8125%','65.625%','38.125%','10.3125%','5.9375%','6.5625%'];
var tArr =['23.958333%','29.583333%','40%','44.166666%','61.666666%','57.083333%','61.25%','46.25%','33.333333%'];
for (var i=0; i < apper.length; i++) {
	apper[i].style.top = tArr[i];
	apper[i].style.left = lArr[i];
	apper[i].bol = false;
}
//记录游戏状态
var play_bol = false;
//记录分数
var score = 0;
var rndtimer  = null;
	
for (var i=0;i < btn.length;i++) {
	btn[i].onclick = function(){//开始游戏
		score = 0;
		for (var i=0; i < apper.length; i++) {
			apper[i].style.display = 'none';
			apper[i].bol = false;
		}
		progress.style.backgroundSize = ' 100% 100%';
		var parent = this.parentNode;
		parent.style.display = 'none';
		timeFn(20,function(){
			p.innerHTML = s.innerHTML;
			p.parentNode.style.display = 'block';
		});
		rndUp();//随机上来
	}
}
//启动打
for (var i=0;i<apper.length;i++) {
	apper[i].onclick = function(){
		if (this.bol) {
			return;
		}
		att(this);
		if (this.flag == 'h') {
			score +=10;
		}else{
			score -=10;
		}
		s.innerHTML = score;
	}
}
	
//打函数
function att(obj){
	var i =6;
	obj.bol = true;
	obj.movebol = true;
	clearTimeout(obj.timer2);
	clearInterval(obj.timer); 
	obj.timer = setInterval(function(){
		i++;
		if (i>=9) {
			clearInterval(obj.timer); 
			obj.timer2 = setTimeout(function(){
				down(obj);
			},50)
			return;
		}
		obj.style.backgroundPositionX = -i*100 +'%';
	},80)
}
//向上出来
function up(obj){
	var i =0;
	obj.movebol = true;
	clearInterval(obj.timer); 
	obj.timer = setInterval(function(){
		i++;
		if (i>=5) {
			clearInterval(obj.timer); 
			obj.timer2 = setTimeout(function(){
				down(obj);
			},300)
			return;
		}
		obj.style.backgroundPositionX = -i*100 +'%';
		obj.style.display = 'block';
	},50)
}
//向下回去
function down(obj, fn){
	var i =5;
	clearInterval(obj.timer); 
	obj.timer = setInterval(function(){
		i--;
		if (i<=0) {
			clearInterval(obj.timer);
			obj.style.display = 'none';
			obj.movebol = false;
			obj.bol = false;
			fn && fn(obj);
		}
		obj.style.backgroundPositionX = -i*100 +'%';
	},50)
}
//计时
function timeFn(timeNum,fn){
	play_bol = true;
	var len = progress.offsetWidth;
	var speed = timeNum;
	var timers = setInterval(function(){
		speed -=0.05;
		if (speed <= 0) {
			rndtimer && clearInterval(rndtimer);
			speed = 0;
			clearInterval(timers);
			for (var i = 0; i < apper.length; i++) {
				clearInterval(apper[i].timer);
			}
			play_bol = false;
			fn && fn();
		}
		progress.style.backgroundSize = (speed/timeNum*100) + "% 100%";
	},50)
}
	
//随机出来
function rndUp(argument){
	rndtimer = setInterval(function(){
		var rnd = Math.floor(Math.random()*apper.length);
		
		if (!apper[rnd].movebol) {
			var str =(Math.random()-0.5>0)?"h":"x";
			apper[rnd].flag = str;
			apper[rnd].style.backgroundImage = "url(img/"+ str + ".png)";
			up(apper[rnd]);
		}
	},500)
}