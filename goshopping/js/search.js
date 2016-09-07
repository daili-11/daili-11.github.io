var resetBtn = document.getElementsByName('reset')[0];
var search = document.getElementsByName('search')[0];
search.focus();
resetBtn.onclick = function() {
  search.value = '';
}
var index = 0;
for (var i = 0; i < 6; i++) {
    var str = localStorage.getItem('search'+i) || '';
    $('.history .td').eq(i).html(str);
    if (!str) {
      index++;
    }
}
if (index>=6) {
  $('.history').hide();
}
$('form').on('submit',function() {
  var str = $(this).find('input').eq(0).val();
  historyFn(str);
})
$('#aClear').on('click',function(){
  $('.history .td').html('');
  for (var i = 0; i < 6; i++) {
      localStorage.removeItem('search'+i);
  }
  $('.history').slideUp(1000);
});
function historyFn(str) {
  var per = '';
  var per1 = '';
  var bol = false;
  for (var i = 0; i < 6; i++) {
    if (bol) {
      per1 = localStorage.getItem('search'+i);
      if (per) {
        localStorage.setItem('search'+i,per);
      }
      per = per1;
    }
    if (localStorage.getItem('search'+i) && !bol) {
      per = localStorage.getItem('search'+i);
      localStorage.setItem('search'+i,str);
      bol = true;
    }
    if (!localStorage.getItem('search'+i) && !bol) {
      localStorage.setItem('search'+i,str);
      break;
    }
  }
}
