const homePage = require('../../pages/home.Page')

describe('Smoke test Base page', () => {
    
    it('Given I go to the Base page', () => {
        homePage.goToHomePage();

    });

    it('Then validate the Base header exist', () => {
        homePage.mainheader().getText().must.equal('Welcome to the-internet')
        
        
    });

    it('Then validate the Sub header exist', () => {
        homePage.subheader().getText().must.include('Available')
        
    });

    

    
   


});