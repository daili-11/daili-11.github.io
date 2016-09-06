$.fn.extend({
	mousewheel:function(cb) {
		if (navigator.userAgent.indexOf("Firefox")>-1) {
			$(this).get(0).addEventListener("DOMMouseScroll",fn);
		}else{			
			$(this).get(0).onmousewheel = fn;
		}
		function fn(e) {
			var e = e || window.event;
			var down = true;
			if (e.detail) {				
				down=e.detail>0;
			}else {
				down=e.wheelDelta<0;
			}		
			cb.apply($(this).get(0),[e,down])
			if (e.preventDefault) {
				e.preventDefault();
			}
			return false;
		}
	}
})
var size ;
(function(html){ 
	change() 
	function change(){ 
	var w = html.clientWidth; 
	size = 100*(w/1440).toFixed(2); 
	html.style.fontSize = size+"px" 
	} 
	window.addEventListener('resize',function () { 
	change();
		con2Fn();
	moveFn();
	wh();
	}) 
})(document.documentElement)




$(function(){
	var $c1l1 = $("#con1_t ul li:nth-child(1)");
	var $c1l2 = $("#con1_t ul li:nth-child(2)");
	var $c2l1 = $("#con2_t ul li:nth-child(1)");
	$('#dowebok').fullpage({
			scrollingSpeed:700,
			resize:true,
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
			navigation: true,
			easing:"easeInQuart",
			afterLoad: function(anchorLink, index){
				$c1l2.removeClass("movetxt");
				$c1l1.find("img").removeClass("moveimg");
				$(".page8").css("display","block");
				if(index == 1){
					$c1l1.delay(500).animate({left: '-22%'}, 1000, 'easeOutBounce');
					$c1l1.delay(500).animate({top: '27%'}, 500);
					$c1l1.delay(500).animate({left: '0'}, 1000, 'easeOutBounce');
					$c1l2.delay(500).animate({left: '0'}, 1000, 'easeOutBounce');
					$c1l2.addClass("movetxt");
					$c1l1.find("img").addClass("moveimg");
					$c2l1.css("top","-25%");
					$("#con2_t").hide();
					$("#vans").hide();
				}
				if(index == 2){
					$(".Pic").fadeIn();
					$c1l1.css("top","43%");
					$c1l1.css("left","-100%");
					$c1l2.css("left","100%");
					$c2l1.css("top","-25%");
					$("#con2_t").hide();
					$("#vans").fadeIn();
				}
				if(index == 3){
					$c1l1.css("top","43%");
					$c1l1.css("left","-100%");
					$c1l2.css("left","100%");
					$c2l1.delay(500).animate({top: '25%'}, 1000, 'easeOutExpo');
					$("#con2_t").fadeIn(500);
					$("#vans").hide();
				}
				if(index == 4){
					con2Fn();
					$c1l1.css("left","-100%");
					$c1l2.css("left","100%");
					$c2l1.css("top","-25%");
					$("#con2_t").hide();
					$("#vans").hide();
				}
				if(index == 5){
					$c1l1.css("top","43%");
					$c1l1.css("left","-100%");
					$c1l2.css("left","100%");
					$c2l1.css("top","-25%");
					$("#con2_t").hide();
					$("#vans").hide();
					$("#con3_t ul li:nth-child(1) img").hover(function(){
						$("#con3_t ul li:nth-child(1) img").addClass("boxmove");
					},function(){
						$("#con3_t ul li:nth-child(1) img").removeClass("boxmove");
					})
				}
				if(index == 6){
					$c1l1.css("top","43%");
					$c1l1.css("left","-100%");
					$c1l2.css("left","100%");
					$c2l1.css("top","-25%");
					$("#con2_t").hide();
					$("#vans").hide();
				}
				if(index == 7){
					$c1l1.css("top","43%");
					$c1l1.css("left","-100%");
					$c1l2.css("left","100%");
					$c2l1.css("top","-25%");
					$("#con2_t").hide();
					$("#vans").hide();
				}
				if(index == 8){

					$c1l1.css("top","43%");
					$c1l1.css("left","-100%");
					$c1l2.css("left","100%");
					$c2l1.css("top","-25%");
					$("#con2_t").hide();
					$("#vans").hide();

					$('.page8').mousewheel(function(e,down) {
						if (down && $(".page8").css("top")!= "-3.96rem") {
							$(".page8").css("top","-3.96rem")
						}
						else {
							if ($(".page8").position().top!=0) {e.stopPropagation()}
							$(".page8").css("top",0);
						}
					})
				}
			},
			afterRender:function(){
				$c1l1.delay(500).animate({left: '-22%'}, 1000, 'easeOutBounce');
				$c1l1.delay(500).animate({top: '27%'}, 500);
				$c1l1.delay(500).animate({left: '0'}, 1000, 'easeOutBounce');
				$c1l2.delay(500).animate({left: '0'}, 1000, 'easeOutBounce');
				$c1l2.addClass("movetxt");
				$c1l1.find("img").addClass("moveimg");
				$c2l1.css("top","-25%");
				$("#con2_t").hide();
				$("#vans").hide();
				setTimeout(function(){
					$c1l2.removeClass("movetxt");
					$c1l1.find("img").removeClass("moveimg");
				},6000)
			}
	});
	wh();
	moveFn();
	con2Fn();
	spectrum();
})


var $Pic = $('.Pic');
var $pic = $('.pic');
var piclr = ($('#Pic').width()-$Pic.width()*$Pic.length)/$Pic.length;
function wh(){
	$Pic.each(function(index){
		if ($("#Pic").height()>$("#Pic").width()/$Pic.length) {
			$(this).css("width",($("#Pic").width()-piclr/2*$Pic.length)/$Pic.length)
			$(this).css({left:($(this).width()+piclr*3/2)*index+"px",height:$(this).width()+"px"});
		}else {
			$(this).css({left:($(this).width()+piclr*3/2)*index+"px",width:$(this).height()+"px"});
		}
		piclr = ($('#Pic').width()-$Pic.width()*$Pic.length)/$Pic.length;
		$(this).on("click",function(e){
			e.stopPropagation();//阻止document冒泡事件
			$pic.eq(index).fadeIn();
		})
		$(document).on("click",function(){
			$pic.eq(index).fadeOut();
		})
	})
}

//文字颜色
function spectrum(){
	var colors = [[0,255,255],[240,255,255],[245,245,220],[0,0,0],[0,0,255],[165,42,42],[0,255,255],[0,0,139],[0,139,139],[169,169,169],[0,100,0],[189,183,107],[139,0,139],[85,107,47],[255,140,0],[153,50,204],[139,0,0],[233,150,122],[148,0,211],[255,0,255],[255,215,0],[0,128,0],[75,0,130],[240,230,140],[173,216,230],[224,255,255],[144,238,144],[211,211,211],[255,182,193],[255,255,224],[0,255,0],[255,0,255],[128,0,0],[0,0,128],[128,128,0],[255,165,0],[255,192,203],[128,0,128],[128,0,128],[255,0,0],[192,192,192],[255,255,255],[255,255,0]];
	var hue =Math.floor(Math.random() * (colors.length-1));
	$('.txtclass').animate({"color":"rgb("+colors[hue][0]+","+colors[hue][1]+","+colors[hue][2]+")"},1000);
	spectrum(); 
}



var c3_inner = document.querySelector('#c3_b_inner')
function move(start,change){
	var endT = 60;
	var t = 0;
	step()
	function step() {
		t++;
		var l = tween(t,start,change,endT);
		if (l+change>0) {c3_pic.style.left = 0;}
		else if (l+change<parseInt(c3_inner.offsetWidth)-parseInt(c3_pic.offsetWidth)) {c3_pic.style.left = (parseInt(c3_inner.offsetWidth)-parseInt(c3_pic.offsetWidth))/size+"rem";}
		else {c3_pic.style.left = (l+change)/size+"rem";}
		function tween(t,b,c,d){
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		}
		console.log(t);
		if (t<endT) {				
			requestAnimationFrame(step);
		}
	}
}
var c3_pic = document.querySelector('#c3_pic');
var x1,x2,l;
function moveFn(){
	c3_pic.onmousedown = function(e){
		e = e||window.event;
		l = c3_pic.offsetLeft;
		x1 = e.clientX;
		document.onmousemove = function(e){
			x2 = e.clientX-x1;
			if (!document.onmousemove && x2==0) {return}
			move(l,x2)
			
		x2=0;
		}
	}
	document.onmouseup = function(){
		document.onmousemove = '';
	}
}


function con2Fn(){
	var con2_img = $("#c2_left img");
	if (con2_img.height()>$("#c2_left").height()) {
		console.log("dddd")
		con2_img.css({height:"100%",width:"auto"})
	}else {
		console.log("eee")
		con2_img.css({width:"100%",height:"auto"})
	}
}