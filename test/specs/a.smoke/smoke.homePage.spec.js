const homePage = require('../../pages/home.Page')

describe('Smoke test Home page', () => {
    
    it('Given I go to the Home page', () => {
        homePage.goToHomePage();

    });

    it('Then validate the Sub header exist', () => {
        homePage.mainheader().getText().must.equal('Welcome to the-internet')
        
        
    });

    it('Then validate the Sub header exist', () => {
        homePage.subheader().getText().must.include('Available')
        
    });

    

    
   


});