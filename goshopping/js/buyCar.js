var $select = $(".select");//每项选择按钮
var $select_all = $(".select_all");//全选按钮
var $add = $(".add");//添加数量按钮
var $minus = $(".minus");//减少数量按钮
var $count = $(".count");//结算商品数量
checkChoose();
checkNum();
/*
*每项选择按钮事件
*/
$select.on("click",function() {
    if ($(this).find("span").css("display")!="none") {
        $(this).find("span").hide();
    }else {
        $(this).find("span").css("display","block");
    }
    checkChoose();
});
/*
*全选按钮事件
*/
$select_all.on("click",function(){
    var paly = null;
    paly = $(this).find("span").css("display")!="none"?"none":"block";
    $(this).find("span").css("display",paly);
    $select.find("span").css("display",$(this).find("span").css("display"));
    checkChoose();
});
/*
*添加数量按钮事件
*/
$add.on("click",function() {
    changeNum($(this),1);
});
/*
*减少数量按钮事件
*/
$minus.on("click",function() {
    changeNum($(this),-1);
});
/*
*统计价格
*/
function countPrice() {
    var price = 0;
    for (var i = 0; i < $select.length; i++) {
        if($select.eq(i).find("span").css("display")=="block"){
            var str = $select.eq(i).parent().find(".price").html();
            var dj = parseFloat(str.split("￥")[1]);
            var num = parseFloat($select.eq(i).parent().find(".num").html());
            price += dj*num;
        }
    }
    $("#sum1").html("￥"+price.toFixed(2));
    $("#sum2").html("￥"+price.toFixed(2));
}
/*
*检查选项的选中情况
*/
function checkChoose() {
    var count = 0;
    for (var i = 0; i < $select.length; i++) {
        if($select.eq(i).find("span").css("display")=="none"){
            continue;
        }
        count ++;
    }
    $count.html(count);
    if (count == $select.length) {
        $select_all.find("span").css("display","block");
    }else {
        $select_all.find("span").hide();
    }
    countPrice();
}
/*
*改变数量
*/
function changeNum(obj,number) {
    var parent = obj.parent();
    var num = parseInt(parent.find(".num").html())+number;
    parent.find(".num").html(num);
    countPrice()
    checkNum();
}
/*
*检查数量是否小于1或者上限 
*/
function checkNum(max) {
    for (var i = 0; i < $minus.length; i++) {
        var parent = $minus.eq(i).parent();
        if (parent.find(".num").html()==1) {
            $minus.eq(i).css("visibility","hidden");
        }else {
            $minus.eq(i).css("visibility","visible");
        }
        if(max){
            if (parent.find(".num").html()==max) {
                $add.eq(i).css("visibility","hidden");
            }else {
                $add.eq(i).css("visibility","visible");
            }
        }
    }
}
