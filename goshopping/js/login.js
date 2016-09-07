var btn = document.getElementsByName('login')[0];
var user = document.getElementsByName('user')[0];
var pwd = document.getElementsByName('pwd')[0];
var tips = document.querySelector('.tips');
var error = tips.getElementsByTagName('span')[0];
user.value = '';
pwd.value = '';
btn.onclick = function(e){
  if (user.value == '') {
    var userT = user.offsetTop;
    tips.style.display = 'block';
    var w = tips.offsetHeight;
    tips.style.top = userT - w + 'px';
    error.innerHTML = '不输用户名就登录的就是耍流氓!';
  }else if(pwd.value == ''){
    var pwdT = pwd.offsetTop;
    tips.style.display = 'block';
    var w = tips.offsetHeight;
    tips.style.top = pwdT - w + 'px';
    error.innerHTML = '用户名都输了,为什么不输密码？耍流氓吗!';
}else {
    
}
  e.cancelBubble = true;
}
document.onclick = function() {
  tips.style.display = 'none';
}
