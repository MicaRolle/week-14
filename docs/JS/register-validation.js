var nameMsg = document.getElementById("name-msg");
var emailMsg = document.getElementById("email-msg");
var passwordMsg = document.getElementById("password-msg");
var confirmMsg = document.getElementById("passwordConf-msg");
var btnReset = document.getElementById("btn-reset");


// Validation: Name
function validationName() {
    var nameRegex = /^[a-zA-Z\s]*$/; 
    if (nameInput.value.match(nameRegex) && !nameInput.value == "") {
        return  true;
    }
    else {
        return false;
    }
}
nameInput.addEventListener("blur", function (){
    if (validationName()){
        nameMsg.style.display = "flex";
        nameMsg.style.color = "green";
        nameMsg.innerHTML = "Correct";
    } else {
        nameMsg.style.display = "flex";
        nameMsg.style.color = "red";
        nameMsg.innerHTML = "Full name must contain valid first name and last name";
    }
});
nameInput.addEventListener("focus", function () {
    nameMsg.style.display = "none";
});

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
        emailMsg.innerHTML = "Email format not valid";
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
// Validation: Second Password
function ValidationSecPassword() {
    if (confirmPassword.value != "" && confirmPassword.value == password.value) {
      return true;
    } else {
      return false;   
    }
}
confirmPassword.addEventListener("blur", function (){
    if (ValidationSecPassword()){
        confirmMsg.style.display = "flex";
        confirmMsg.style.color = "green";
        confirmMsg.innerHTML = "Correct";
    } else {
        confirmMsg.style.display = "flex";
        confirmMsg.style.color = "red";
        confirmMsg.innerHTML = "Password does not match";
    }
});

confirmPassword.addEventListener("focus", function () {
    confirmMsg.style.display = "none";
});
// Validations Fuctions
form.addEventListener("submit", function (e) {
    if (validationName() && ValidationEmail() && ValidationPassword() && ValidationSecPassword()) {
      testScreen.style.display = "flex";
      msgValidations.innerHTML +=
        `<li>${nameInput.value}</li>`+ `<li>${email.value}</li>`+
        `<li>${password.value}</li>`+ `<li>${confirmPassword.value}</li>`;
      e.preventDefault();
      fetch('http://localhost:4000/register', {
          method: 'POST', 
          body: JSON.stringify({name: `${nameInput.value}`, email: `${email.value}`, password: `${password.value}`,
          confirpasword: `${confirmPassword.value}`}),
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
// API
async function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json();
    })
    .then(json => console.log(json))
    .catch()
}
*/ 