const dol = {}

// Locator

dol.header = () => { return $('h3') }

dol.header = () => { return $('//*[@id="content"]/div/h3') }

//functions

dol.goToDownload = () => {
    console.log('step: looking for download page')

    browser.url('/download')

    dol.header().waitForDisplayed()

    console.log('step: found for download page')
}

module.exports = dol