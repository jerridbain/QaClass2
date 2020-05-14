const dol = require('../../pages/download.page')

describe('Smoke test Download page', () => {
    
    it('Given I go to the Download page', () => {
        dol.goToDownload();

    });

    it('Then validate the Download header exist', () => {
        dol.header().isExisting();
        
    });

    
    
    

    



});