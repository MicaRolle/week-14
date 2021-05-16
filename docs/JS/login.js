var email = document.getElementById("email");
var password = document.getElementById("password");
var msgValidations = document.getElementById("validations");
var labelEmail = document.getElementById("labelEmail");
var labelPass = document.getElementById("labelPass");
var testScreen = document.getElementById("test-container");


//Validation: Form element exist.
function formExist() {
  if (form !== null) {
    return true;
  } else {
      testScreen.style.display = "flex";
      msgValidations.innerHTML += `<li>Form element doesn't exist</li>`;
  }
}

//Validation: Labels exist.

function labelsExits() {
  if (
    labelEmail !== null && labelEmail.getAttribute("for") == "email" &&
    labelPass !== null && labelPass.getAttribute("for") == "password"
  ) {
    return true;
  } else {
    testScreen.style.display = "flex";
    clean();
    msgValidations.innerHTML += `<li>For no coincidents with labels</li>`;
  }
}

//Validation: Inputs exist.
function inputsExist() {
  if (
    email !== null &&
    password !== null
  ) {
    return true;
  } else {
    if (email == null) {
      testScreen.style.display = "flex";
      clean();
      msgValidations.innerHTML += `<li>Email input is missing</li>`;
    }
    if (password == null) {
      testScreen.style.display = "flex";
      clean();
      msgValidations.innerHTML += `<li>Password input is missing</li>`;
    }
  }
}

// Validation: Required
function inputRequired() {
  if (email.hasAttribute("required") && password.hasAttribute("required")) {
    return true;
  } else {
    testScreen.style.display = "flex";
    clean();
    msgValidations.innerHTML +=`<li>Missing required attribute</li>`;
    return false;   
  }
}



// Validation: Email
function validationEmail() {
    var mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(mailRegex)) {
      return true;
    } else {
      return false;
    }
}

// Validation: Password
function validationPassword() {
  var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.value.match(passRegex) && password.value.length >= 6) {
    return true;
  } else {
    return false;
  }
}

// Validation: Submitt Button
function buttonContent() {
  var btnSign = document.getElementById("btn-sub").getAttribute("type");
  var btnReset = document.getElementById("btn-reset").getAttribute("type");
    if ( btnSign == "submit" && btnReset == "reset") {
    return true;
  } else {
    testScreen.style.display = "flex";
    clean();
    msgValidations.innerHTML += "<li>Wrong buttons value</li>";
    return false;
    }
}
//Validations are true.
function validationsTrue() {
  if (formExist() && inputsExist() && buttonContent() &&
      inputRequired() && labelsExits() ) {
    testScreen.style.display = "flex";
    clean();
    msgValidations.innerHTML = "Every validation has passed!";
    }
}

//Function clean.
function clean(){
  msgValidations.innerHTML = "";
}

// Validate All
function validateAll(){
  clean();
  validationsTrue();
  formExist();
  inputsExist();
  buttonContent();
  inputRequired();
  labelsExits();
}