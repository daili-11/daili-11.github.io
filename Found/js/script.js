//获取标签
var time = document.querySelector('.timer');
var score = document.querySelector('.score');
var btn = document.querySelector('button');
var wrap = document.querySelector('.wrap');
//记录关数
var index = 1;
//记录分数
var s =0 ;
//记录颜色
var colors = 0;
var colorArr = ["pink","blue","yellow","green","red","orange"];
//记录游戏状态
var start_bol = false;
//开始按钮
btn.onclick = function(){
	if(start_bol){return}//游戏开始后禁止再次执行以下代码
	index = 1;
	start_bol = true;//游戏记录为开始
	index++;
	timerFn();//启动倒计时
	create(index*index)//创建初始 img
}
/*
 * 创建img，关卡升级函数
 * len 是创建几行几列
 */
function create(len){
	wrap.innerHTML = '';//创建前清空，防止叠加
	for(var i=0; i < len; i ++){
		var img = document.createElement('img'); //创建 img
		img.src = 'img/1.png';//设置地址
		//初始化 img
		img.style.width = (wrap.offsetWidth - (index+1)*5)/index + "px"; 
		img.style.marginLeft = '5px';
		img.style.background = colorArr[colors];
		//添加到wrap
		wrap.appendChild(img);
	}
	//记录下一颜色
	colors ++;
	colors >= colorArr.length? colors = 0: colors;
	//随机改变一张图片
	change(); 
}
/*
 * 随机改变一张图片 并设置点击事件
 */
function change(){
	//随机获取 一个img的位置值
	var rnd = Math.floor(Math.random()*wrap.children.length);
	//修改图片路径
	wrap.children[rnd].src = 'img/2.png';
	//设置点击事件
	wrap.children[rnd].onclick = function(){
		//游戏未开始不可执行以下代码
		if(!start_bol){return}
		//关数增加
		index ++;
		//分数增加
		s += 10;
		//写入页面
		score.innerHTML = "分数：" + s;
		//判断是否通关
		if (index >= 12) {
			alert("你赢了！");
			//游戏状态为结束
			start_bol = false;
			return;
		}
		//进入下一关卡
		create(index*index);
	}
}
/*
 * 倒计时函数
 */
function timerFn(){
	var n = 80;//游戏时间
	var timer = setInterval(function(){
		n -=0.02;
		if (n<= 0) {
			//时间到，清除计时器
			clearInterval(timer);
			//游戏结束
			start_bol = false;
			//时间为0
			n = 0;
		}
		//写入页面
		time.innerHTML = "剩余时间："+ n.toFixed(2) +"秒";
	},20);
}