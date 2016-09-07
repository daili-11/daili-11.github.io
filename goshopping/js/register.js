var backBtn = document.querySelector('.header a');
var btn = document.getElementsByName('login')[0];
var user = document.getElementsByName('user')[0];
var pwd = document.getElementsByName('pwd')[0];
var pwd_s = document.getElementsByName('pwd_s')[0];
var check = document.getElementsByName('check')[0];
var tips = document.querySelector('.tips');
var error = tips.getElementsByTagName('span')[0];
user.value = '';
pwd.value = '';
btn.onclick = function(e){
  if (user.value == '') {
    var t = user.offsetTop;
    tips.style.display = 'block';
    var w = tips.offsetHeight;
    tips.style.top = t - w + 'px';
    error.innerHTML = '不输手机号码不给注册!';
  }else if(pwd.value == ''){
    var t = pwd.offsetTop;
    tips.style.display = 'block';
    var w = tips.offsetHeight;
    tips.style.top = t - w + 'px';
    error.innerHTML = '密码都不给，怎么注册';
  }else if(check.value == ''){
    var t = check.parentNode.offsetTop;
    tips.style.display = 'block';
    var w = tips.offsetHeight;
    tips.style.top = t - w + 'px';
    error.innerHTML = '不要忘了验证码君!它会伤心的';
  }else {

  }
  e.cancelBubble = true;
}

user.onkeyup = function() {
  var reg = /^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|70)\d{8}$/
  var bol = reg.test(this.value);
  if (bol) {
    tips.style.display = 'none';
  }else {
    var t = this.offsetTop;
    tips.style.display = 'block';
    var w = tips.offsetHeight;
    tips.style.top = t - w + 'px';
    error.innerHTML = '您输入的不是手机号码!';
  }
}
pwd.onkeyup = function() {
  var reg = /^.{6,}$/
  var bol = reg.test(this.value);
  if (bol) {
    tips.style.display = 'none';
  }else {
    var t = this.offsetTop;
    tips.style.display = 'block';
    var w = tips.offsetHeight;
    tips.style.top = t - w + 'px';
    error.innerHTML = '密码必须六位以上!';
  }
}
pwd_s.onkeyup = function() {
  if (pwd.value == pwd_s.value) {
    tips.style.display = 'none';
  }else {
    var t = this.offsetTop;
    tips.style.display = 'block';
    var w = tips.offsetHeight;
    tips.style.top = t - w + 'px';
    error.innerHTML = '密码与重复密码不一致!';
  }
}
document.onclick = function() {
  tips.style.display = 'none';
}
backBtn.onclick = function() {
  backUrl();
}
