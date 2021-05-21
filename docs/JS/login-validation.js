var emailMsg = document.getElementById("email-msg"); 
var passwordMsg= document.getElementById("password-msg");
var form = document.querySelector("form");
var btnReset = document.getElementById("btn-reset");





// Validation: Email
function ValidationEmail() {
    var mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.value == "" && email.value.match(mailRegex) ) {
        return true;
    } else {
        return false;    
    }
}
email.addEventListener("blur", function (){
    if (ValidationEmail()){
        emailMsg.style.display = "flex";
        emailMsg.style.color = "green";
        emailMsg.innerHTML = "Correct";
    } else {
        emailMsg.style.display = "flex";
        emailMsg.style.color = "red";
        emailMsg.innerHTML = "The email is incorrect";
    }
});
email.addEventListener("focus", function () {
    emailMsg.style.display = "none";
});


// Validation: Password
function ValidationPassword() {
    var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.value.match(passRegex) && password.value.length >= 8) {
      return true;
    } else {
       return false; 
    }
}
password.addEventListener("blur", function (){
      if (ValidationPassword()){
          passwordMsg.style.display = "flex";
          passwordMsg.style.color = "green";
          passwordMsg.innerHTML = "Correct";
              
      } else {
          passwordMsg.style.display = "flex";
          passwordMsg.style.color = "red";
          passwordMsg.innerHTML = "Password must have 8 characters, one number, one uppercase";
    }
});

password.addEventListener("focus", function () {
      passwordMsg.style.display = "none";
});

// Validations Fuctions
form.addEventListener("submit", function (e) {
    if (ValidationEmail() && ValidationPassword()) {
      testScreen.style.display = "flex";
      msgValidations.innerHTML +=
        `<li>${email.value}</li>`+
        `<li>${password.value}</li>`;
      e.preventDefault();
      fetch('http://localhost:4000/login', {
        method: 'PUT', 
        body: JSON.stringify({email: `${email.value}`, password: `${password.value}`}),
        headers: {'Content-type': 'application/json'}
       });
    } else {
      return false;
    }
});
btnReset.addEventListener("click", function(e){
    e.preventDefault();
    location.reload();
});




/*
 API
async function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json();
    })
    .then(json => console.log(json))
    .catch()
}
*/ 