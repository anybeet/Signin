var btn =document.getElementById('bttn')
btn.addEventListener('click', function myFunction(event){
    var email = document.getElementById("mail").value
    var p = document.getElementById('validate');
    if(email.indexOf('@')>=0 && email.indexOf('.com')>=0){
        document.getElementById('a').href='/Home/Home.html'
    }
    else{
        event.preventDefault()
        p.innerHTML='Please Enter a Valid Email.'
    }
})
