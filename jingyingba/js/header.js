$(function() {
    var bol =false;
    $(function () {
        $('.city').on('click',function(){
            if (!bol) {
                cityShow();
            }else {
                cityHide();
            }
            var $li = $('.cities').find('li');
            $li.on('click',function(){
                cityHide();
                $('.city').find('p').text($(this).find('p').text())
            })
            function cityShow() {
                $('.cities').stop().slideDown();
                $('.city').css({borderBottom:"none",borderRadius:"5px 5px 0 0"})
                $("#cname").css("background","url(img/ico.png) no-repeat 35px -582px");
                bol =true;
            }
            function cityHide() {
                $('.cities').stop().slideUp(function(){
                    $('.city').css({borderBottom:"1px solid #e0e0e0",borderRadius:"5px"})
                });
                $("#cname").css("background","url(img/ico.png) no-repeat 35px -565px");
                bol=false;
            }
        })
        $('.login a').click(function() {
            if ($(this).index()==1) {
                localStorage.setItem("login","0");
            }
        });
    });
})
