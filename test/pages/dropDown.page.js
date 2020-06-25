const dropDown = {}

// Locator

dropDown.select = () => { return $('select#dropdown') }

//functions

dropDown.goToDropDown = () => {
    console.log('step: looking for drop down page')

    browser.url('/dropdown')

    dropDown.select().waitForDisplayed()

    console.log('step: found for drop down page')
}

module.exports = dropDown