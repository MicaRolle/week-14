var form = document.querySelector("form");
var nameInput = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("password_two");
var testScreen = document.getElementById("test-container");
var msgValidations = document.getElementById("validations");
var labelName = document.getElementById("labelName");
var labelEmail = document.getElementById("labelEmail");
var labelPass = document.getElementById("labelPass");
var labelSecPas = document.getElementById("labelSecPas")

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
    labelName !== null && labelName.getAttribute("for") == "name" &&
    labelEmail !== null && labelEmail.getAttribute("for") == "email" &&
    labelPass !== null && labelPass.getAttribute("for") == "password" && 
    labelSecPas !== null && labelSecPas.getAttribute("for") == "password_two"
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
    nameInput !== null &&
    email !== null &&
    password !== null &&
    password_two !== null
  ) {
    return true;
  } else {
    if (nameInput == null) {
      testScreen.style.display = "flex";
      clean();
      msgValidations.innerHTML += `<li>Name input is missing</li>`;
    }
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
    if (password_two == null) {
      testScreen.style.display = "flex";
      clean();
      msgValidations.innerHTML += `<li>Confirm Password input is missing</li>`;
    }
  }
}
// Validation: Required
function inputRequired() {
    if (email.hasAttribute("required") && password.hasAttribute("required") &&
        nameInput.hasAttribute("required") && password_two.hasAttribute("required")) {
      return true;
    } else {
      testScreen.style.display = "flex";
      clean();
      msgValidations.innerHTML +=`<li>Missing required attribute</li>`;
      return false;   
    }
  }

// Validation: Anchor
function anchorValidation() {
  var anchorReferent = document.getElementById("anchor").getAttribute("href");
  if (anchorReferent == "./login.html") {
    return true;
  } else {
    testScreen.style.display = "flex";
    clean();
    msgValidations.innerHTML +=`<li>The rediraction is incorrect.</li>`;
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
  if (formExist() && inputsExist() && buttonContent() && anchorValidation() &&
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
  anchorValidation();
  inputRequired();
  labelsExits();
}