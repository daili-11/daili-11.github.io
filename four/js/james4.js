	

	$yi = $('.wrap .yi');
	$er = $('.wrap .er');
	$a2 = $('#nav a:nth-child(2)');
	$a3 = $('#nav a:nth-child(3)');
	$a4 = $('#nav a:nth-child(4)');
	$img4 = $('#nav .im4');
	$img5 = $('#nav img:nth-child(5)');
	$a2.click(function () {
		$yi.hide();
		$a2.hide();
		$a4.hide();
		$img4.hide();
		$img5.attr('src','../img/sou4.png');
		$er.show();

	})

	$logoi = $('#nav .logoi');
	$strong = $('#nav strong');
	$var = $('#nav var');
	$span = $('#nav span');
	$tk = $('.wrap .tk');

	$img5.click(function () {
		$yi.hide();
		$er.hide();
		$a2.hide();

		$a3.hide();
		$a4.hide();
		$img4.hide();
		$img5.attr('src','../img/sou4.png');
		$tk.show();
		$var.show();
		$strong.css({
			color: '#e51837'
		})
		$strong.show();

		$span.show();
		$logoi.attr('src','../img/yuan.png');
	})

	$var.click(function () {
		$tk.hide();
		// $var.hide();
		$er.show();
	})







	// $('.p1').click(function () {
	// 	$('.ul1').slideToggle();
	// })

	// $('.p2').click(function () {
	// 	$('.ul2').slideToggle();
	// })
	// $('.p3').click(function () {
	// 	$('.ul3').slideToggle();
	// })
	// $('.p4').click(function () {
	// 	$('.ul4').slideToggle();
	// })
	// $('.p5').click(function () {
	// 	$('.ul5').slideToggle();
	// })

	// $('.ps').click(function () {
	// 	console.log($('.ps'))
	// 	$('.uls').eq($(this).parent().index()).slideToggle();
	// })

	$('.ps').each(function () {
		$(this).click(function () {
			$(this).parent().find('ul').slideToggle();
			
		})
	})

	
























