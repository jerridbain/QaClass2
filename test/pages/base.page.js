const base = {}

// Locator

base.header = () => { return $('h3') }

base.header = () => { return $('//*[@id="content"]/h1') }

base.subheader = () => { return $('h2') }

base.subheader = () => { return $('//*[@id="content"]/h2') }

//functions

base.goToBasePage = () => {
    console.log('step: looking for base page')

    browser.url('/')

    base.header().waitForDisplayed()

    console.log('step: found for base page')
}

module.exports = base

