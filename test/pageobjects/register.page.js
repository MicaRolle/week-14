class RegisterPage {
    
    get nameInput () { return $('#name') } 
    get nameMsg () { return $('#name-msg') }
    get emailInput  () { return $('#email') }
    get emailMsg  () { return $('#email-msg') }
    get passwordInput () { return $('#password') }
    get passwordMsg () { return $('#password-msg') }
    get confirmPassInput () { return $('#password_two') }
    get confirmMsg () { return $('#passwordConf-msg')}
    get btnSign () { return $('#btn-sub') }
    get btnReset () { return $('#btn-reset') }
    get msgValidations () { return $('#validations') }
    get labelName () { return $('#labelName') }
    get labelEmail () { return $('#labelEmail') }
    get labelPass  () { return $('#labelPass') }
    get labelSecPas () { return $('#labelSecPas') }
    get linkLogin () { return $('#anchor') }


  
    setName (name) {
        this.nameInput.setValue(name);
        this.nameInput.keys("Tab");
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
        this.confirmPassInput.setValue(confirmPassword);
        this.confirmPassInput.keys("Tab");
    }

  
    register (name, email, password, confirmPassword) {
        this.setName(name);
        this.setEmail(email);
        this.setPassword(password);
        this.setConfirmPass(confirmPassword);
    
    }

    open () {
        browser.url('https://micarolle.github.io/week-14/docs/register.html ');
    }
}

module.exports = new RegisterPage();