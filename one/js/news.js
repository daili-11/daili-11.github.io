var $read = $('.read');
var $li = $read.find('li');
var $p = $('.descrip');
$p.on('click',function () {
	$p.css({color:'red'});
	$li.slideToggle("slow","linear");
})
