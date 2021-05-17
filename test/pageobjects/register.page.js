class RegisterPage {
    
    get nameInput () { return $('#name') } 
    get nameMsg () { return $('#name-msg') }
    get email  () { return $('#email') }
    get emailMsg  () { return $('#email-msg') }
    get password () { return $('#password') }
    get passwordMsg () { return $('#password-msg') }
    get confirmPassword () { return $('#password_two') }
    get confirmMsg () { return $('#passwordConf-msg')}
    get btnSign () { return $('#btn-sub') }
    get btnReset () { return $('#btn-reset') }
    get msgValidations () { return $('#validations') }
    get labelName () { return $('labelName') }
    get labelEmail () { return $('labelEmail') }
    get labelPass  () { return $('labelPass') }
    get labelSecPas () { return $('labelSecPas') }
    get linkLogin () { return $('#anchor') }


  
    setName (nameInput) {
        this.inputName.setValue(nameInput);
        this.inputName.keys("Tab");
    }

    setEmail (email) {
        this.emailInput.setValue(email);
        this.emailInput.keys("Tab");
    }

    setPassword (password) {
        this.passwordInput.setValue(password);
        this.passwordInput.keys("Tab");
    }

    setConfirmPass (confirmPassword) {
        this.confirmPassInput.setValue(confirmPasswords);
        this.confirmPassInput.keys("Tab");
    }

  
    register (nameInput, email, password, confirmPassword) {
        this.setFullName(fullName);
        this.setEmail(email);
        this.setPassword(password);
        this.setConfirmPass(confirmPass);
        this.registerBtn.click();
    }

    open () {
        browser.url('https://micarolle.github.io/register.html');
    }
}

module.exports = new RegisterPage();