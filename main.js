// Initialize Firebase
var config = {
    apiKey: "AIzaSyBA5K8CqMrjyIyvEdEick3R2W3Nu4bQZII",
    authDomain: "contactform-da95f.firebaseapp.com",
    databaseURL: "https://contactform-da95f.firebaseio.com",
    projectId: "contactform-da95f",
    storageBucket: "",
    messagingSenderId: "167192025887"
  };
  firebase.initializeApp(config);

  //Reference messages collection
  var messagesRef= firebase.database().ref('messages');

//Listen for form submit
document.getElementById('Contactform').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    //Get values
    var name=getInputVal('name');
    var company=getInputVal('company');
    var email=getInputVal('email');
    var phone=getInputVal('phone');
    var message=getInputVal('message');
    //save Message
    saveMessage(name,company,email,phone,message);
    //show alert
    document.querySelector('.alert').style.display='block';
    //hide alter after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    },3000);
    document.getElementById('Contactform').reset();
}
// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(name,company, email,phone,message){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    })
}