import basePage from "../../pages/base.page";



const homePage = new basePage()

describe('Smoke test the home page', () => {

    it('Given I go to the home page', () => {
        homePage.goToHomePage()

    });

    it('Then validate that the page headers', () => {
        homePage.assert(homePage.logo.getHTML().includes('alt="My Store"'))
        homePage.assert(homePage.aHref1.getHTML().includes('title="Women"'))
        homePage.assert(homePage.aHref2.getHTML().includes('title="Dresses"'))
        homePage.assert(homePage.aHref3.getHTML().includes('title="T-shirts"'))

    });
    
});