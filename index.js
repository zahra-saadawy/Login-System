document.addEventListener("DOMContentLoaded", clearForm);


var users =[];
if (localStorage.getItem('currentUsers') != null) {
    users = JSON.parse(localStorage.getItem("currentUsers"));
    }
var signUpBtn = document.querySelector(".sign-up");
// Sign Up Methods-------------

function addUser() {
    console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyy");

    var nameElement = document.querySelector('.name');
    var mailElement = document.querySelector('.mail-s');
    var passwordElement = document.querySelector('.password-s');

    if ( nameElement.value != "" && mailElement.value != "" &&  passwordElement.value!= "") {
        var name = nameElement.value;
        var mail = mailElement.value;
        var password = passwordElement.value;
        if(!isValidEmail(mail)){
            window.alert("invalid mail");
              return;
            }
        if (validateSignUp() == true) {
            var user = { userName: name, userMail: mail, userPassword: password };
            users.push(user);
            localStorage.setItem('currentUsers', JSON.stringify(users));
            console.log(users);
            window.alert("Registration Successful!");
            window.location.href= "index.html";
        } else {
            window.alert("Mail already has an account");
        }
    } else {
       window.alert("Please fill all the fields");
    }
    clearForm();

}
function validateSignUp(){
    var mail = document.querySelector('.mail-s').value;
    // users =JSON.parse( localStorage.getItem('currentUsers'));
   
    if (localStorage.getItem('currentUsers') != null) {
        users = JSON.parse(localStorage.getItem("currentUsers"));
        for(var i =0; i<users.length; i++){
            if ((users[i]).userMail.toLowerCase()== mail.toLowerCase())
            return false;
        }
        }

    
    return true;
}

signUpBtn.addEventListener("click", function(){
    event.preventDefault();
    addUser();
    console.log("i clicked");
})

function clearForm(){
     document.querySelector('.name').value= "";
     document.querySelector('.mail-s').value="";
     document.querySelector('.password-s').value="";
}


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  