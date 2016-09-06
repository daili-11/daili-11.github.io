var a = $('.wrap .nav .xiangmu a');
var pp = $('.wrap .nav .xiangmu p');

a.on('click',function () {
	pp.hide();
	$(this).next().show();
})


var p = $('.content .left .top p');
var span = $('.content .left .top p span');

p.on('click',function () {
	span.css("opacity","0");
	p.css("color","#999999");
	$(this).css("color","#494949");
	$(this).find('span').css({
		opacity:'1'
	})

})