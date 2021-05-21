const RegisterPage = require('../pageobjects/register.page');

describe('Testing in Register page', () => {
    beforeAll('Open page in browser', () =>  {
        RegisterPage.open();
    });
    describe('Testing Name cell', () => {
        it('Use an undefined name', () => {
            RegisterPage.setName();
            expect(RegisterPage.nameMsg).toHaveText('Full name must contain valid first name and last name');
            browser.pause(1500); 
        });       
        it('Use a valid name',()=>{
            RegisterPage.setName('Valid name user');
            expect(RegisterPage.nameMsg).toHaveText('Correct');
            browser.pause(1500);   
        });
    });
    describe('Testing Email cell', () => {
        it('Use a invalid email',()=>{
            RegisterPage.setEmail('mica');
            expect(RegisterPage.emailMsg).toHaveText('Email format not valid');
            browser.pause(1500);    
        }); 
        it('Use a valid email',()=>{
            RegisterPage.setEmail('mica@gmail.com');
            expect(RegisterPage.emailMsg).toHaveText('Correct');
            browser.pause(1500);    
        });
    });
    describe('Testing Password cell', () => {
        it('Use a password with less than 8 characters', () => {
            RegisterPage.setPassword('1994mr');
            expect(RegisterPage.passwordMsg).toHaveText('Password must have 8 characters, one number, one uppercase');
            browser.pause(1500);
        });
        it('Use a valid password', () => {
            RegisterPage.setPassword('1994Micaela');
            expect(RegisterPage.passwordMsg).toHaveText('Correct');
            browser.pause(1500);
        });
    });
    describe('Testing confirm password cell', () => {
        it('Use a diferrent password that the first password', () => {
            RegisterPage.setConfirmPass();
            expect(RegisterPage.confirmMsg).toHaveText('Password does not match');
            browser.pause(1500);
        });
        it('Use a match password', () => {
            RegisterPage.setConfirmPass('1994Micaela');
            expect(RegisterPage.confirmMsg).toHaveText('Correct');
            browser.pause(1500);
        });
    });

   
    describe('Imputs exists', () => {
        it('Testing imputs', () => {
            expect(RegisterPage.nameInput).toExist();
            expect(RegisterPage.emailInput).toExist();
            expect(RegisterPage.passwordInput).toExist();
            expect(RegisterPage.confirmPassInput).toExist();
            browser.pause(1500);
        });
        it('Testing correction labels', () => {
            RegisterPage.open();
            expect(RegisterPage.labelName).toHaveText('Name');
            expect(RegisterPage.labelEmail).toHaveText('Email');
            expect(RegisterPage.labelPass).toHaveText('Password');
            expect(RegisterPage.labelSecPas).toHaveText('Repeat password')
            browser.pause(1500);
        });
    });  
   
}); 