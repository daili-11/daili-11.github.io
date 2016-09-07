var arrImg = [
	"img/bg1.jpg", "img/bg2.jpg", "img/bg3.jpg", "img/bg4_b.png", "img/bg5.jpg",
	"img/car.png", "img/car2.png", "img/button.png", "img/logo_l.png", "img/logo_r.png",
	"img/title1.png", "img/title1_b.png", "img/title2.png", "img/title3.png", "img/title4.png",
	"img/title4_b.png", "img/title5.png", "img/wheel.png", "img/web-swipe-tip.png"
];
var prograssbar = document.getElementById("prograssbar");
var imgsum = 0;
var cache = [];
for (var i = 0; i < arrImg.length; i++) {
	cache[i] = new Image();
	cache[i].src = arrImg[i];
	cache[i].onload = function() {
		imgsum++;
		w = imgsum / arrImg.length * 100;
		prograssbar.style.width = w + "%";
		if (imgsum >= arrImg.length) {
			show();
		};
	}
}

function show() {
	var load = document.getElementById("loading");
	load.style.display = "none";
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		mousewheelControl: true,
		onInit: function(swiper) {
			swiperAnimateCache(swiper);
			swiperAnimate(swiper);
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper);
		}
	})
}
