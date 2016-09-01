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
//注册
$(".in .p").click(function() {
	localStorage.setItem("login",'0');
})

var rbtn = $('.aniuR');
var lbtn = $('.aniuL');
var bol = false;
lbtn.on('click',function(){
	var li = $('.gun li')
	if (!bol) {
		bol=true
		$('.gun').stop().animate({left:"-167px"},200,function(){
			bol=false;
			$(this).append(li.first())
			$(this).css({left:'0'})
		})
	}	
})
rbtn.on('click',function(){
	var li = $('.gun li')
	if (!bol) {
		bol=true
		$('.gun').prepend(li.last())
		$('.gun').css({left:'-167px'})
		$('.gun').stop().animate({left:"0"},200,function(){
			bol=false;	
		})
	}	
})
