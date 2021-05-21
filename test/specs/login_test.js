const LoginPage = require('../pageobjects/login.page');

describe('Testin in login page', () => {
    beforeAll('Open page in browser', () =>  {
      browser.url('https://micarolle.github.io/week-14/docs/login.html');
    });
    describe('Testing Email cell', () => {
        it('Use a invalid email',()=>{
            LoginPage.setEmail('mica');
            expect(LoginPage.emailMsg).toHaveText('Email format not valid');
            browser.pause(1500);    
        }); 
        it('Use a valid email',()=>{
            LoginPage.setEmail('mica@gmail.com');
            expect(LoginPage.emailMsg).toHaveText('Correct');
            browser.pause(1500);    
        });
    });
    describe('Testing Password cell', () => {
        it('Use a password with less than 8 characters', () => {
            LoginPage.setPassword('1994mr');
            expect(LoginPage.passwordMsg).toHaveText('Password must have 8 characters, one number, one uppercase');
            browser.pause(1500);
        });
        it('Use a valid password', () => {
            LoginPage.setPassword('1994Micaela');
            expect(LoginPage.passwordMsg).toHaveText('Correct');
            browser.pause(1500);
        });
    });
    describe('Imputs exists', () => {
        it('Testing imputs', () => {
            expect(LoginPage.emailInput).toExist();
            expect(LoginPage.passwordInput).toExist();
            browser.pause(1500);
        });
        it('Testing correction labels', () => {
            LoginPage.open();
            expect(LoginPage.labelEmail).toHaveText('Email');
            expect(LoginPage.labelPass).toHaveText('Password');
            browser.pause(1500);
        });
    }); 
  
});