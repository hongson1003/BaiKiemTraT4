function showError(spanId){
    var span = document.getElementById(spanId);
    if (spanId=='errorFirst')
        span.innerText = 'Vui lòng nhập đúng định dạng first name';
    else if (spanId == 'errorLast')
        span.innerText = 'Vui lòng nhập đúng định dạng last name';
    else if (spanId=='errorEmail')
        span.innerText = 'Vui lòng nhập đúng định dạng email';
    else if (spanId=='errorPass')
        span.innerText = 'Mật khẩu phải có 6 kí tự trở lên';
    else if(spanId=='errorPassR')
        span.innerText = 'Vui lòng nhập lại giống mật khẩu';
    span.style.color = 'red';
    span.style.fontWeight = '700';
}
function hidenError(spanId){
    var span = document.getElementById(spanId);
    span.innerText = '';
}
function blurEvent(element, spanId, regex){
    element.addEventListener('blur', function(){
        if (regex.test(element.value)==false)
            showError(spanId);
    })
}
function inputEvent(element, spanId){
    element.addEventListener('input', function(){
        hidenError(spanId);
    })
}
var firstName = document.getElementById('exampleFirstName');
var lastName = document.getElementById('exampleLastName');
var email = document.getElementById('exampleInputEmail');
var pass = document.getElementById('exampleInputPassword');
var passR = document.getElementById('exampleRepeatPassword');

blurEvent(firstName, 'errorFirst', /^[a-zA-Z][a-zA-Z]*/);
blurEvent(lastName, 'errorLast', /^[a-zA-Z][a-zA-Z]*/);
blurEvent(email, 'errorEmail', /^[a-zA-Z]\w+@[a-zA-Z]+.com/);
blurEvent(pass, 'errorPass', /\w{6}/);
blurEvent(passR, 'errorPassR', /\w{6}/);


inputEvent(firstName, 'errorFirst');
inputEvent(lastName, 'errorLast');
inputEvent(email, 'errorEmail');
inputEvent(pass, 'errorPass');
inputEvent(passR, 'errorPassR');

var submit = document.getElementById('mysubmit');
submit.addEventListener('click', function(e){
   var errorlist = document.getElementsByClassName('myerror');
   var check = true;
   for (var i=0;i<errorlist.length;i++){
        if (errorlist[i].innerText != ''){
            check = false;
            break;
        }
   }
   if (firstName.value=='' || lastName.value=='' || email.value==''
   || pass.value=='' || passR=='')
        check = false; 
   if (check==false){
        e.preventDefault();
        console.log('ki ay')
   }
})