$(function() {
    // 初始化
    var state = localStorage.getItem("login");
    //判断进入的状态
    if (state==0) {
        $('.login').removeClass('sel');
        $(".regsiter").addClass('sel');
        $('#box_regsiter').show();
        $('#box_login').hide();
        localStorage.removeItem("login");
    }
    checkboxChecked($("#box_regsiter .checkbox"));
    banBtn($("#box_regsiter .checkbox"),$('#box_regsiter .btn input'));
    //勾选按钮
    $(".checkbox").click(function() {
        checkboxChecked($(this))
        banBtn($("#box_regsiter .checkbox"),$('#box_regsiter .btn input'))
    })

    //登录模式
    $(".login").click(function () {//选择登录模式
        $('.regsiter').removeClass('sel');
        $(this).addClass('sel');
        $('#box_login').show();
        $('#box_regsiter').hide();
    });
    //登录下正则判断
    var $login = $("#box_login");
    $login.find("[name=login]").click(function () {
        if ($(this).attr('databol')==0) {return}

        var bol1 = phoneCheck($login.find("[name=user]"),0);
        var bol2 = pwdCheck($login.find("[name=pwd]"),1,'密码不能为空!');
        var bol3 = numCheck($login.find("[name=num]"),2,'请填写验证码!');
        if(bol1 && bol2 && bol3){
            $(this).attr('databol',0);
            $(this).css("backgroundColor",'#ccc');
            $(this).val("登录中...");
        }
    });
    //注册模式
    $(".regsiter").click(function () {//选择注册模式
        $('.login').removeClass('sel');
        $(this).addClass('sel');
        $('#box_regsiter').show();
        $('#box_login').hide();
    });
    //注册下正则判断
    var $regsiter = $('#box_regsiter');
    // $regsiter.find("[name=pPwd]").on("keyup",function() {
    //     var reg = /^.{6,}$/
    //     if(reg.test($(this).val())){
    //         $regsiter.find('p').eq($(this).parents(".pwd").index()-3).hide();
    //     }else {
    //         $regsiter.find('p').eq($(this).parents(".pwd").index()-3).show().find('span').text("密码必须在六位以上!");
    //     }
    // })
    $regsiter.find("[name=regsiter]").click(function () {
        if ($(this).attr('databol')==0) {return}

        var bol1 = phoneCheck($regsiter.find("[name=pUser]"),0);
        var bol2 = numCheck($regsiter.find("[name=pNum]"),1,'图形验证码不能为空');
        var bol3 = numCheck($regsiter.find("[name=phonenum]"),2,'验证码不能为空!');
        var bol4 = pwdCheck($regsiter.find("[name=pPwd]"),3,'密码不能为空!');
        var bol5 = pwdCheck($regsiter.find("[name=re_pwd]"),4,'请再次输入密码!',$regsiter.find("[name=pPwd]"));
        if(bol1 && bol2 && bol3 && bol4 && bol5){
            $(this).attr('databol',0);
            $(this).css("backgroundColor",'#ccc');
            $(this).val("数据提交中...");
        }
    })



    //检测
    function phoneCheck($obj,i) {
        var reg = /^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|70)\d{8}$/;
        if ($obj.val()=='') {
            $obj.parent().parent().find('p').eq($obj.parents(".user").index()-i).show().find('span').text('手机号码不能为空!');
        }else if (!reg.test($obj.val())) {
            $obj.parent().parent().find('p').eq($obj.parents(".user").index()-i).show().find('span').text('手机号码格式不正确!');
        }else{
            $obj.parent().parent().find('p').eq($obj.parents(".user").index()-i).hide();
            return true;
        }
    }
    function pwdCheck($obj,i,mess,re) {
        var mess = mess || 'Error!';
        if ($obj.val()=='') {
            $obj.parent().parent().find('p').eq($obj.parents(".pwd").index()-i).show().find('span').text(mess);
        }else{
            if (re) {
                if(re.val()!=$obj.val()){
                    $obj.parent().parent().find('p').eq($obj.parents(".pwd").index()-i).show().find('span').text("两次密码不一致!");
                    return false;
                }
            }
            $obj.parent().parent().find('p').eq($obj.parents(".pwd").index()-i).hide();
            return true;
        }
    }
    function numCheck($obj,i,mess) {
        var mess = mess || 'Error!';
        if ($obj.val()=='') {
            $obj.parent().parent().parent().find('p').eq($obj.parents(".checknum").index()-i).show().find('span').text(mess);
        }else{
            $obj.parent().parent().parent().find('p').eq($obj.parents(".checknum").index()-i).hide();
            return true;
        }
    }
    // 获取手机验证
    $("#phonecheck").click(function () {
        if ($(this).attr("databol")==0) {return}
        $(this).attr("databol","0");
        $(this).text('50秒');
        $(this).addClass('checked');
        var t = 50;
        var timer = setInterval(function() {
            t --;
            if (t <= 0) {
                clearInterval(timer);
                $("#phonecheck").attr("databol","1");
                $("#phonecheck").removeClass('checked');
                $("#phonecheck").text('获取验证码');
                return;
            }
            $("#phonecheck").text(t+'秒');
        },1000)
    });
    //获取焦点
    $('#box_login>div,#box_regsiter>div').click(function () {$(this).find('input').focus();});
    //检查勾选框
    function checkboxChecked($obj) {
        if ($obj.attr('databol')==0) {
            $obj.css('backgroundPosition',"0 -95px")
            $obj.attr('databol','1');
        }else {
            $obj.css('backgroundPosition',"0 -72px");
            $obj.attr('databol','0');
        }
    }
    //禁止按钮
    function banBtn($obj,$btn) {
        if ($obj.attr('databol')==0) {
            $btn.css("backgroundColor",'#ccc')
            $btn.attr('databol',$obj.attr('databol'));
        }else {
            $btn.css("backgroundColor",'#29b572')
            $btn.attr('databol',$obj.attr('databol'));
        }
    }
});
