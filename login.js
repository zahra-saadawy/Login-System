document.addEventListener("DOMContentLoaded", clearForm);
function clearForm(){
    document.querySelector('.mail-l').value="";
    document.querySelector('.password-l').value="";
}
function logIn() {
    console.log("I'm in ");
    console.log(JSON.parse(localStorage.getItem("currentUsers")));
    var loginMail = document.querySelector(".mail-l");
    var loginPassword = document.querySelector(".password-l");
    if (loginMail.value != "" && loginPassword.value != "") {
        
        var mailL = loginMail.value;
        var passwordL = loginPassword.value;

        if (localStorage.getItem('currentUsers') != null) {
            var users = JSON.parse(localStorage.getItem("currentUsers"));
            var flag = false;
            for (var i = 0; i < users.length; i++) {
                
                if (users[i].userMail.toLowerCase() == mailL.toLowerCase()) {
                    if (users[i].userPassword == passwordL) {
                        localStorage.setItem('loggedInUserName', users[i].userName);
                        clearForm();
                        window.location.href = "home.html";
                        flag = true;
                        

                    } else {
                        window.alert("Incorrect password");
                        console.log(users[i].userPassword);
                        return;
                    }
                }
            }

            if (!flag) {
                window.alert("Mail doesn't exist");
            }
        }
    } else {
        window.alert("Please enter both email and password");
    }
}

        var logInBtn = document.querySelector(".log-in");
        logInBtn.addEventListener("click", function() {
            event.preventDefault();
            logIn();
        });
  
      
       