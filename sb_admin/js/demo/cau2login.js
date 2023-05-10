// email va pass word không duoc trống

var email = document.getElementById('exampleInputEmail');
var passWord = document.getElementById('exampleInputPassword');

email.addEventListener('blur', function(){
    var regex = /^[a-zA-Z]\w+@[a-zA-Z]+.com/;
    var span = document.getElementById('errorEmail');
    span.style.color =  "red";
    span.style.fontSize = '10px';
    if (regex.test(email.value)==false || email.value=='')
        span.innerText = 'Vui lòng nhập địa chỉ email đúng định dạng';
})

passWord.addEventListener('blur', function(){
    var regex = /^\w+/;
    var span = document.getElementById('errorPassWord');
    span.style.fontSize = '10px';

    span.style.color =  "red";

    if (regex.test(passWord.value)==false || passWord.value=='')
        span.innerText = 'Vui lòng password không được để trống';
})

passWord.addEventListener('input', function(){
    var span = document.getElementById('errorPassWord');
    span.innerText = '';
})

email.addEventListener('input', function(){
    var span = document.getElementById('errorEmail');
    span.innerText = '';
})

var login = document.getElementById('login');
login.addEventListener('click', function(e){
    var check = true;
    var spans = document.getElementsByClassName('error');
    for (var i=0;i<spans.length;i++)
        if (spans[i].innerText!='')
            check = false;
    if (email.value=='' || passWord.value=='')
        check = false;
    if (check==false)
        e.preventDefault();
    else {
        login.setAttribute('href', 'tables.html')
    }
})