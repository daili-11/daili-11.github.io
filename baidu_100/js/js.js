$(document).ready(function(){
	// 精彩推荐的选择显示图片
	var index = -1,len = $(".big_img").children().length;
	var pic ;
	// $(".header").append(index);
	pic=setInterval(function(){
		len-1 > index ? index ++ : index = 0;
		// $(".header").append(index);
		$(".big_img").children().addClass("hidden");
		$(".big_img").children().eq(index).removeClass("hidden");
		$(".small_img").children().removeClass("select");
		$(".small_img").children().eq(index).addClass("select");
	},800);
	$("#hat").addClass("hidden");
	$("#girl").addClass("hidden");
	$("#father").removeClass("hidden");
	$(".to_father").hover(function(){
		clearInterval(pic);
		$(".big_img").children().addClass("hidden");
		$("#father").removeClass("hidden");
		$(".small_img").children().removeClass("select");
		$(this).addClass("select");
	},function () {
		index=0;
		pic=setInterval(function(){
		len > index+1 ? index ++ : index = 0;
		// $(".header").append(index);
		$(".big_img").children().addClass("hidden");
		$(".big_img").children().eq(index).removeClass("hidden");
		$(".small_img").children().removeClass("select");
		$(".small_img").children().eq(index).addClass("select");
	},600);
	});
	$(".to_hat").hover(function(){
		clearInterval(pic);
		$(".big_img").children().addClass("hidden");
		$("#hat").removeClass("hidden");
		$(".small_img").children().removeClass("select");
		$(this).addClass("select");
	},function (){
		index=1;
		pic=setInterval(function(){
		len > index+1 ? index ++ : index = 0;
		// $(".header").append(index);
		$(".big_img").children().addClass("hidden");
		$(".big_img").children().eq(index).removeClass("hidden");
		$(".small_img").children().removeClass("select");
		$(".small_img").children().eq(index).addClass("select");
	},600);
	});
	$(".to_girl").hover(function(){
		clearInterval(pic);
		$(".big_img").children().addClass("hidden");
		$("#girl").removeClass("hidden");
		$(".small_img").children().removeClass("select");
		$(this).addClass("select");
	},function(){
		index=2;
		pic=setInterval(function(){
		len > index+1 ? index ++ : index = 0;
		// $(".header").append(index);
		$(".big_img").children().addClass("hidden");
		$(".big_img").children().eq(index).removeClass("hidden");
		$(".small_img").children().removeClass("select");
		$(".small_img").children().eq(index).addClass("select");
	},600);
	});
	$("#father").hover(function(){
		clearInterval(pic);
	},function(){
		index=0;
		pic=setInterval(function(){
		len > index+1 ? index ++ : index = 0;
		// $(".header").append(index);
		$(".big_img").children().addClass("hidden");
		$(".big_img").children().eq(index).removeClass("hidden");
		$(".small_img").children().removeClass("select");
		$(".small_img").children().eq(index).addClass("select");
	},600);
	});
	$("#hat").hover(function(){
		clearInterval(pic);
	},function(){
		index=1;
		pic=setInterval(function(){
		len > index+1 ? index ++ : index = 0;
		// $(".header").append(index);
		$(".big_img").children().addClass("hidden");
		$(".big_img").children().eq(index).removeClass("hidden");
		$(".small_img").children().removeClass("select");
		$(".small_img").children().eq(index).addClass("select");
	},600);
	});
	$("#girl").hover(function(){
		clearInterval(pic);
	},function(){
		index=2;
		pic=setInterval(function(){
		len > index+1 ? index ++ : index = 0;
		// $(".header").append(index);
		$(".big_img").children().addClass("hidden");
		$(".big_img").children().eq(index).removeClass("hidden");
		$(".small_img").children().removeClass("select");
		$(".small_img").children().eq(index).addClass("select");
	},600);
	});




	// 地铁线路的选择
	$(".subway_line").children().attr("src","img/line1.jpg");
	$(".line1").addClass("onlook");
	$(".line1").click(function(){
		$(".subway_line").children().attr("src","img/line1.jpg");
		$(".subway_btn").children().removeClass("onlook");
		$(this).addClass("onlook");
	});
	$(".line2").click(function(){
		$(".subway_line").children().attr("src","img/line2.jpg");
		$(".subway_btn").children().removeClass("onlook");
		$(this).addClass("onlook");
	});
	$(".line13").click(function(){
		$(".subway_line").children().attr("src","img/line3.jpg");
		$(".subway_btn").children().removeClass("onlook");
		$(this).addClass("onlook");
	});
	$(".line8").click(function(){
		$(".subway_line").children().attr("src","img/line8.jpg");
		$(".subway_btn").children().removeClass("onlook");
		$(this).addClass("onlook");
	});
	$(".line5").click(function(){
		$(".subway_line").children().attr("src","img/line5.jpg");
		$(".subway_btn").children().removeClass("onlook");
		$(this).addClass("onlook");
	});
	// 论坛信息的显示
	$(".bbs_list").children("img").addClass("hidden");
	$(".number").addClass("hidden");
	$(".bbs_list").first().addClass("hover");
	$(".bbs_list").first().children("img").removeClass("hidden");
	$(".bbs_list").first().children("span.number").removeClass("hidden");

	$(".bbs_list").hover(function(){
		$(".bbs_list").removeClass("hover");
		$(".bbs_list").children("img").addClass("hidden");
		$(".bbs_list").children("span.number").addClass("hidden");
		$(this).addClass("hover");
		$(this).children("img").removeClass("hidden");
		$(this).children("span.number").removeClass("hidden");
	});
	// 搜索框的选择
	$(".search_con").addClass("hidden");
	$(".s_shop").removeClass("hidden");
	$(".search_nav").children().click(function(){
		$(".search_nav").children().removeClass("check");
		$(this).addClass("check");
	});
	$(".search_nav").children().eq(0).click(function(){
		$(".search_con").addClass("hidden");
		$(".s_shop").removeClass("hidden");
	});
	$(".search_nav").children().eq(1).click(function(){
		$(".search_con").addClass("hidden");
		$(".s_add").removeClass("hidden");
	});
	$(".search_nav").children().eq(2).click(function(){
		$(".search_con").addClass("hidden");
		$(".s_sav").removeClass("hidden");
	});
	$(".search_nav").children().eq(3).click(function(){
		$(".search_con").addClass("hidden");
		$(".s_txt").removeClass("hidden");
	});
	$(".search_nav").children().eq(5).click(function(){
		$(".search_con").addClass("hidden");
		$(".s_vedio").removeClass("hidden");
	});
	// 红店铺的选择
	$(".tab_con").addClass("hidden");
	$(".hot_shop").removeClass("hidden");
	$(".tab .tab_top").children().click(function(){
		$(".tab .tab_top").children().removeClass("look");
		$(this).addClass("look");
	});
	$(".tab .tab_top").children().eq(0).click(function(){
		$(".tab_con").addClass("hidden");
		$(".hot_shop").removeClass("hidden");
	});
	$(".tab .tab_top").children().eq(1).click(function(){
		$(".tab_con").addClass("hidden");
		$(".new_shop").removeClass("hidden");
	});
	// 城市的选择
	$(".left").children().click(function(){
		$(".left").children().removeClass("ativited");
		$(this).addClass("ativited");
	});

	// 地铁的选择
	$(".subway_con").addClass("hidden");
	$(".subway_lines").removeClass("hidden");
	$(".subway .tab_top").children().click(function(){
		$(".subway .tab_top").children().removeClass("look");
		$(this).addClass("look");
	});
	$(".subway .tab_top").children().eq(0).click(function(){
		$(".subway_con").addClass("hidden");
		$(".subway_lines").removeClass("hidden");
	});
	$(".subway .tab_top").children().eq(1).click(function(){
		$(".subway_con").addClass("hidden");
		$(".subway_map").removeClass("hidden");
	});

	// 知道的选择
	$(".list_con .tr").addClass("hidden");
	$(".ask").removeClass("hidden");
	$(".list_con .tab_nav").children().hover(function(){
		$(".list_con .tab_nav").children().removeClass("look");
		$(this).addClass("look");
	});
	$(".list_con .tab_nav").children().eq(0).hover(function(){
		$(".list_con .tr").addClass("hidden");
		$(".ask").removeClass("hidden");

	});
	$(".list_con .tab_nav").children().eq(1).hover(function(){
		$(".list_con .tr").addClass("hidden");
		$(".kown").removeClass("hidden");

	});
	$(".list_con .tab_nav").children().eq(2).hover(function(){
		$(".list_con .tr").addClass("hidden");
		$(".hot_ask").removeClass("hidden");

	});

	// 抢劵儿的选择
	$(".tab_list_con .tr").addClass("hidden");
	$(".p_top").removeClass("hidden");
	$(".tab_list_con .tab_nav").children().hover(function(){
		$(".tab_list_con .tab_nav").children().removeClass("look");
		$(this).addClass("look");
	});
	$(".tab_list_con .tab_nav").children().eq(0).hover(function(){
		$(".tab_list_con .tr").addClass("hidden");
		$(".p_top").removeClass("hidden");

	});
	$(".tab_list_con .tab_nav").children().eq(1).hover(function(){
		$(".tab_list_con .tr").addClass("hidden");
		$(".r_top").removeClass("hidden");

	});
	$(".tab_list_con .tab_nav").children().eq(2).hover(function(){
		$(".tab_list_con .tr").addClass("hidden");
		$(".n_top").removeClass("hidden");

	});

	// 红人烧客
	$(".icon_hover").addClass("hidden");
	$(".la_con div").hover(function(){
		$(".icon_hover").addClass("hidden");
		$(this).children().eq(1).removeClass("hidden")
	});

	// 日历
	$(".cla_con .day_hover").addClass("hidden");
	var p_info, img_info;
	$(".cal1").hover(function(){
		$(".cla_con .day_hover").removeClass("hidden");
		$(".cla_con .day_hover").addClass("cal_1");
		p_info = $(".cal1").children().children().attr("info");
		img_info= $(".cal1").children().children().attr("src");
		$(".info").children("p").text(p_info);
		$(".info").children("strong").text("TUE");
		$(".day_hover").children("img").attr("src", img_info);
	},function(){
		$(".cla_con .day_hover").addClass("hidden");
		$(".cla_con .day_hover").removeClass("cal_1");
	});
	$(".cal2").hover(function(){
		$(".cla_con .day_hover").removeClass("hidden");
		$(".cla_con .day_hover").addClass("cal_2");
		p_info = $(".cal2").children().children().attr("info");
		img_info= $(".cal2").children().children().attr("src");
		$(".info").children("p").text(p_info);
		$(".info").children("strong").text("FRI");
		$(".day_hover").children("img").attr("src", img_info);
	},function(){
		$(".cla_con .day_hover").addClass("hidden");
		$(".cla_con .day_hover").removeClass("cal_2");
	});
	$(".cal3").hover(function(){
		$(".cla_con .day_hover").removeClass("hidden");
		$(".cla_con .day_hover").addClass("cal_3");
		p_info = $(".cal3").children().children().attr("info");
		img_info= $(".cal3").children().children().attr("src");
		$(".info").children("p").text(p_info);
		$(".info").children("strong").text("STA");
		$(".day_hover").children("img").attr("src", img_info);
	},function(){
		$(".cla_con .day_hover").addClass("hidden");
		$(".cla_con .day_hover").removeClass("cal_3");
	});

	

});