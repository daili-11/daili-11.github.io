var btn = $('.btn li');
var img = $('.inner img');
var bol =false;
var i=0;
var Img;
btn.on('click',function(){
	i = $(this).index()
	change(i)
});
function Btn() {
	i++;
	if (i>2) {
		i=0;
	}
	change(i)
}
setInterval(function(){
 	Btn()
},5000)
function change(i){
	Img=img.eq(i);
	if (!bol) {
		bol=true;
		btn.eq(i).css({background:"green"})
		btn.not(btn.eq(i)).css({background:"white"})
		Img.animate({opacity:"1",zIndex:"1"},1000,function(){
			bol=false;
		});
		img.not(Img).animate({opacity:"0"},1000)
	} 
}

var $cont_t_a = $("#cont_t a");
var $cont_b_a = $("#cont_b ul li a");
$cont_t_a.each(function(){
	$(this).on("click",function(){
		$cont_t_a.removeClass("select");
		$(this).addClass("select");
	})
})
$cont_b_a.each(function(){
	$(this).on("click",function(){
		$cont_b_a.removeClass("select");
		$(this).addClass("select");
	})
})
