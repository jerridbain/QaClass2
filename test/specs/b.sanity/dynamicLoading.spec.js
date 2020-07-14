const dyn = require('../../pages/dynamicLoading.page')

describe('As a User test the dynamic loading page', () => {


    it('Given I am on the dynamic loading page', () => {
        dyn.goToDynamicLoading()
    });

    it('When I click on example one', () => {
        dyn.aTags()[0].waitForDisplayed()
        dyn.aTags()[0].click()
    });

    it('And click on the start button', () => {
        dyn.startBtn().waitForDisplayed()
        dyn.startBtn().click()

    });

    it('Then verify Hello World exist', () => {
        dyn.helloWorld().waitForDisplayed()
        dyn.helloWorld().getText().must.equal('Hello World!')
    
    });

    
});

describe('As a User test the dynamic loading page', () => {


    it('Given I am on the dynamic loading page', () => {
        dyn.goToDynamicLoading()
    });

    it('When I click on example two', () => {
        dyn.aTags()[1].waitForDisplayed()
        dyn.aTags()[1].click()
    });

    it('And click on the start button', () => {
        dyn.startBtn().waitForDisplayed()
        dyn.startBtn().click()

    });

    it('Then verify Hello World exist', () => {
        dyn.helloWorld().waitForDisplayed()
        dyn.helloWorld().getText().must.equal('Hello World!')
    
    });

    
});

