var navLi=$(".content .nav li");
var navDown=$(".content .nav .navDown");
var section=$("section");
navLi.click(function () {
	var startX=navDown.position().left;
	var endX=($(this).index()-1)*86+75
	var speed=(endX-startX)/15
	moveFn(navDown,startX,endX,speed)
	$(this).addClass("select").siblings().removeClass("select");
	if (section.eq($(this).index()-1).css("display")=="none") {
		section.hide().eq($(this).index()-1).slideDown();
	}
})
function moveFn(obj,a,b,v) {
	var timer=setInterval(function () {
		a+=v;
		if ((v>=0&&a>=b)||(v<0&&a<=b)) {
			clearInterval(timer)
			a=b
			click_bol=true
		}
		obj.css({
			left:a
		})
	},17)
}
var zuixin=$(".zuixin")
var inner=$(".zuixin .main .inner");
var prev=$(".zuixin .prev");
var next=$(".zuixin .next");
var click_bol=true
prev.click(function () {
	if (!click_bol) {return}
	click_bol=false
	if (inner.position().left>=0) {
		inner.css({
			left:"-880px"
		})
	}
	moveFn(inner,inner.position().left,inner.position().left+220,5)
})
next.click(function () {
	if (!click_bol) {return}
	click_bol=false
	if (inner.position().left<=-880) {
		inner.css({
			left:0
		})
	}
	moveFn(inner,inner.position().left,inner.position().left-220,-5)
})
var gundong_bol=true;
zuixin.hover(
	function () {
		gundong_bol=false;
	},function () {
		gundong_bol=true;
})
var timer=setInterval(function () {
	gundong_bol&&next.click()
},3000)




var example=$(".content .example")
var exampleBtn=$(".content .example .btn span");
var ul=$(".content .example ul");
var progress=$(".content .progress")
ul.each(function () {
	$(this).width($(this).find("li").length*260)
})
autoExample()
$(window).resize(function () {
	autoExample()
})
function autoExample() {
	example.width(example.find("ul").width())
	if (example.width()>=$("body").width()*0.9) {
		example.width($("body").width()*0.9)
	}
	progress.width(example.width()*example.width()/example.find(".show").width())
}
exampleBtn.click(function () {
	$(this).addClass("select").siblings().removeClass("select");
	ul.eq($(this).index()).addClass("show").siblings().removeClass("show")
	example.width(example.find(".show").width())	
	if (example.width()>=$("body").width()*0.9) {
		example.width($("body").width()*0.9)
	}
	progress.width(example.width()*example.width()/example.find(".show").width())
})
progress.mousedown(function (e) {
	var dx=e.clientX-progress.position().left;
	var show=$(".example .show");
	var scale=(show.width()-example.width())/(example.width()-progress.width())
	$(document).mousemove(function (e) {
		var x=e.clientX-dx;
		if (x<=0) {x=0}
		if (x>=example.width()-progress.width()) {
			x=example.width()-progress.width()
		}
		progress.css({
			left:x
		})
		show.css({
			left:-x*scale
		})
	})
	return false
})
$(document).mouseup(function (e) {
	$(document).off("mousemove")
})


var serviceBtn=$(".content .service .btn span");
var contain=$(".content .service .contain");
serviceBtn.click(function () {
	$(this).addClass("select").siblings().removeClass("select");
	contain.removeClass("show").eq($(this).index()).addClass("show");
})










