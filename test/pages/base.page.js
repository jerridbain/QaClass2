const base = {}

// Locator

base.header = () => { return $('h3') }

base.header = () => { return $('//*[@id="content"]/h1') }



//functions

base.goToBasePage = () => {
    console.log('step: looking for base page')

    browser.url('/')

    base.header().waitForDisplayed()

    console.log('step: found for base page')
}

module.exports = base

