const dropDown = {}

// Locator

dropDown.header = () => { return $('h3') }

dropDown.header = () => { return $('//*[@id="content"]/div/h3') }


dropDown.id = () => { return $$('//*[@id="dropdown"]') }



//functions

dropDown.goToDropDown = () => {
    console.log('step: looking for drop down page')

    browser.url('/dropdown')

    dropDown.header().waitForDisplayed()

    console.log('step: found for drop down page')
}

module.exports = dropDown