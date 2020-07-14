const homePage = {}

// Locator

homePage.mainheader = () => { return $('h1') }


homePage.subheader = () => { return $('h2') }




//functions

homePage.goToHomePage = () => {
    console.log('step: going to home page')

    browser.url('/')

    homePage.mainheader().waitForDisplayed()

    console.log('step: found for home page')
}

module.exports = homePage;

