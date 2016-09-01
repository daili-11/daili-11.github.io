$(function() {
    var $div = $('.content .bim');
    var headerH = $('.header').height();
    var index = getIndex ();
    var before = index;
    $div.parent().css('paddingTop',headerH);
    animateFn(index);
    $(window).mousewheel(function(e,down){
        if ($div.bol) {return}
        $div.bol = true;
        before = index;
        if (down) {
            index ++;
            if(index>$div.length-1){
                if ($(window).scrollTop()<= $('.wrap').height()-$(window).height()) {
                    $(window).scrollTop($('.wrap').height()-$(window).height());
                    index = $div.length-1;
                    $div.bol = false;
                    return;
                }
            }
        } else{
            index --;
            if(index<= 0){
                index = 0;
            }
        }
        animateFn(index);
        move(down);
    })
    function animateFn(i){
        $div.find('.an').addClass('paused');
        $div.find('.an').removeClass('animate');
        $div.eq(i).find('.an').removeClass('paused');
        $div.eq(i).find('.an').addClass('animate');
    }
    $(window).scroll(function(){
        index = getIndex();
    })
    $(window).resize(function(){
        index = getIndex();
    })
    function move (down) {
        var top = $div.eq(index).offset().top-headerH;
        var divT = $div.eq(before).offset().top-headerH;
        var sTop = $(window).scrollTop();
        if (index == before && sTop == divT) {$div.bol = false;return;}
        if (sTop>divT && !down) {
            top = divT;
        }
        $(window).scrollMove(top,Tween.easeOut,function(){
            $div.bol = false;
        });
    }
    function getIndex () {
        var sTop = $(window).scrollTop();
        var index = 0;
        $div.each(function(i){
            if (sTop>=$(this).offset().top-headerH) {
                index = i;
            }
        })
        return index;
    }
});
