const drp = {}

// Locator

drp.header = () => { return $('h3') }

drp.header = () => { return $('//*[@id="content"]/div/h3') }


drp.id = () => { return $$('//*[@id="dropdown"]') }



//functions

drp.goToDropDown = () => {
    console.log('step: looking for drop down page')

    browser.url('/dropdown')

    drp.header().waitForDisplayed()

    console.log('step: found for drop down page')
}

module.exports = drp