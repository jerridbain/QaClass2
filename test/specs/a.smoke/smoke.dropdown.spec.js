const drp = require('../../pages/dropdown.page')

describe('Smoke test Dropdown page', () => {
    
    it('Given I go to the Dropdown page', () => {
        drp.goToDropDown();

    });

    it('Then validate the Dropdown header exist', () => {
        drp.header().isExisting();
        
    });

    it('And validate the paragraphs exist', () => { 
        drp.id()[0].isExisting()
        

    });
    
    

    



});