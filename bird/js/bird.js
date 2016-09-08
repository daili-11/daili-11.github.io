var wrap = document.querySelector('.wrap');
var start = document.querySelector('.start');
var btn = document.querySelector('.start p');
var play = document.querySelector('.play');
var bird = document.querySelector('.play_b');
var zhu = document.getElementsByClassName('zhu');
var up = document.getElementsByClassName('up');
var down = document.getElementsByClassName('down');
var num =  document.querySelector('.num');
var end = document.querySelector('.end');
var over = document.querySelector('.over');
var scroll = document.querySelector('.scroll');
var sco = document.querySelector('.sco');
var best = document.querySelector('.best');
var submit = document.querySelector('.submit');
var audio = document.getElementsByTagName('audio');
var bird_bol = false;
var sco_bol = false;
var score = 0;
var sl = 0;
btn.onclick = function(e) {
	audio[0].pause();
	bird_bol = false;
	start.style.display = 'none';
	play.style.display = 'block';
	bird.style.top = '200px';
	xia(bird,scroll.offsetTop-bird.offsetHeight)
	for (var i = 0; i < up.length; i++) {
		var h = random(100,250);
		up[i].style.height = h+'px';
		down[i].style.height = 304-h+'px';
	}
	num.innerHTML = "";
	step_scroll()
	function step_scroll() {
		sl -= 1.5;
		if (sl<=-156) {
			sl = 0;
		}
		scroll.style.transform = 'translate('+sl+'px)';
		var timer3 = requestAnimationFrame(step_scroll);
		if (bird_bol) {
			cancelAnimationFrame(timer3);
		}
	}
	document.onclick = function() {
		if (bird_bol) {return}
		audio[4].play();
		shang(bird,bird.offsetTop-25);
	}
	document.onkeydown = function(e) {
		if (bird_bol) {return}
		audio[4].play();
		var e = e || window.event;
		if (e.keyCode==38) {
			shang(bird,bird.offsetTop-25);
		}
	}
	for (var i = 0; i < zhu.length; i++) {
		timer(zhu[i])
	}
	e.stopPropagation();
}
submit.onclick = function() {
	score = 0;
	sco_bol = false;
	end.style.display = 'none';
	play.style.display = 'none';
	start.style.display = 'block';
	for (var i = 0; i < zhu.length; i++) {
		zhu[i].style.left = 200 + i*160 + 'px';
	}
}
	function judge(obj) {
		var l1 = bird.offsetLeft
		var t1 = bird.offsetTop
		var r1 = l1 + 34;
		var b1 = t1 + 21;
		var l2 = obj.offsetLeft
		var t2 = obj.children[1].offsetHeight;
		var r2 = l2 + 62;
		var b2 = t2 + 120;
		if (r1>=l2 && l1<r2) {
			if (b1>b2 || t1<t2) {
				bird_bol = true;
				audio[1].play();
				xia(bird,scroll.offsetTop-bird.offsetHeight,0.5);
				setTimeout(function() {
					audio[3].play();
				},800)
			}
		}
		if (l1>r2 && !sco_bol) {
			sco_bol = true;
			score++;
			audio[2].play();
			scoreFn()	
		}
	}
	function timer(obj) {
		var l = obj.offsetLeft;
		step()
		function step() {
			l -=1.5;
			judge(obj);
			obj.style.left = l +'px';
			var timer2 = requestAnimationFrame(step);
			if (l<=-160) {
				l = 320;
				var h = random(100,250)
				obj.children[1].style.height = h+'px';
				obj.children[0].style.height =304-h+'px';
				sco_bol = false;
			}
			if (bird_bol) {
				cancelAnimationFrame(timer2);
				end.style.display = 'block';
				sco.innerHTML = score;
				if (!localStorage.getItem('best')) {
					localStorage.setItem('best',score)
				}
				if (score>localStorage.getItem('best')) {
					localStorage.setItem('best',score)
				}
				best.innerHTML = localStorage.getItem('best');
				setTimeout(function() {
					audio[0].play();
				},1000)
			}
		}
	}
	function random(min,max) {
		return Math.floor(Math.random()*(max-min)+min);
	}
	function scoreFn() {
		var str = String(score);
		num.innerHTML = "";
		for (var i = 0; i < str.length; i++) {
			var img = document.createElement('img');
			img.src = 'img/'+str[i]+'.jpg';
			num.appendChild(img);
		}
	}
	function shang(obj,end) {
		var start = obj.offsetTop;
		var change = end - start;
		var t = 0;
		var endT = 15;
		var d = 0;
		cancelAnimationFrame(obj.timer);
		step_shang()
		function step_shang() {
			t++;
			d -= 2;
			obj.style.transform = 'rotate('+d+'deg)'
			obj.style.top = Tween.Cubic.easeOut(t,start,change,endT)+'px';
			obj.timer = requestAnimationFrame(step_shang);
			if (t>=endT) {
				cancelAnimationFrame(obj.timer);
				xia(bird,scroll.offsetTop-bird.offsetHeight,0.5,d)
			}
		}
	}
	function xia(obj,end,s,d) {
		var start = obj.offsetTop;
		var change = end-start;
		var t = 0;
		var endT = 60;
		cancelAnimationFrame(obj.timer);
		step_xia()
		function step_xia() {
			t++;
			d +=s;
			obj.style.transform = 'rotate('+d+'deg)'
			obj.style.top = Tween.Cubic.easeIn(t,start,change,endT)+'px';
			obj.timer = requestAnimationFrame(step_xia);
			if (t>=endT) {
				cancelAnimationFrame(obj.timer);
				d = 0;
			}
		}
	}