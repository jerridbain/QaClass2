const form = require('../../pages/formAuth.page')
const creds = require('../../data/inputs')

describe('As a user, test missing un', () => {

    it('Given I am on the login page', () => {
        form.gotoFormAuth()
    });

    //enter only the login pw

    it('When I enter the ony the password', () => {      
        form.pw().setValue('process.env.pw') 
        form.button().click()    
    });

    it('Then verify the invaild username banner', () => {
        form.flash().waitForDisplayed()
        form.flash().getText().includes('invaild')
    });

    
    
});

describe('As a user, test correct credentials', () => {

    it('Given I am on the login page', () => {
        form.gotoFormAuth()
    });

    it('When I enter the correct username and  password', () => {
        form.un().setValue('process.env.un')
        form.pw().setValue('process.env.pw')
        form.button().click()    
        
    });

    it('Then verify the invaild logged in  banner', () => {
        form.flash().waitForDisplayed()
        form.flash().getText().includes("logged in")
    });
    
});



