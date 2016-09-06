var a = $('.wrap .nav .xiangmu a');
var p = $('.wrap .nav .xiangmu p');

var img = $('.wrap .tehui div img');


a.on('click',function () {

	p.hide();

	$(this).next().show();
})

img.hover(function () {
	$(this).addClass('scale');
	
},function () {
	$(this).removeClass('scale');
})

// $("td").hover(
//   function () {
//     $(this).addClass("hover");
//   },
//   function () {
//     $(this).removeClass("hover");
//   }
// );

var arr = ['../img/lord_1.png','../img/lord_2.png','../img/lord_3.png','../img/lord_4.png','../img/lord_5.png','../img/lord_6.png','../img/lord_7.png','../img/lord_8.png'];
var li = $('.wrap .nav2 .center li');

li.on('click',function () {
	
	for (var i = 0; i < arr.length; i++) {

		$('.lord .lords img').attr('src',arr[$(this).index()]);
	}
})



// $.each(li,function () {
// 	$(this).click(function () {
// 		for (var i = 0; i < arr.length; i++) {
// 			$('.lord .lords img').attr('src',arr[$(this).index()]);
// 		}
// 	})
// })


$('.dingzhi img').hover(function () {
	$(this).addClass('change');
},function() {
	$(this).removeClass('change');
})

