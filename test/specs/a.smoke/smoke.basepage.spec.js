const base = require('../../pages/base.page')

describe('Smoke test Base page', () => {
    
    it('Given I go to the Base page', () => {
        base.goToBasePage();

    });

    it('Then validate the Base header exist', () => {
        base.header().isExisting() 
        
        
    });

    it('Then validate the Sub header exist', () => {
        base.subheader().isExisting()
        
    });

    

    
   


});