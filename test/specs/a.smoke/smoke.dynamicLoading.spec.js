const dyn = require('../../pages/dynamicLoading.page')


describe('As a User, Smoke test Dynamic loading page', () => {
    
    it('Given I am on the dynamic loading page', () => {
        dyn.goToDynamicLoading()

    });

    it('Then validate the header exist', () => {
        dyn.header().isExisting();
        
    });

    it('And validate the paragraphs exist', () => { 
        dyn.pTags()[0].isExisting()
        dyn.pTags()[1].isExisting()

    });

    it('And validate the anchor tags exist', () => {
        dyn.aTags()[0].isExisting()
        dyn.aTags()[1].isExisting()
    });



});