const dyn = {}

// Locators

dyn.header = () => { return $('h3') }

dyn.pTags = () => { return $$('//h3/following-sibling::p') }

dyn.aTags = () => { return $$('//h3/following-sibling::a') }

//functions

dyn.goToDynamicLoading = () => {
    console.log('step: looking for dynamic loading page')

    browser.url('/dynamic_loading')

    dyn.header().waitForDisplayed()

    console.log('step: found for dynamic loading page')
}

module.exports = dyn