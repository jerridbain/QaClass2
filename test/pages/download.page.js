const download = {}

// Locator

download.links = () => { return $$('a') }

//functions

download.goToDownload = () => {
    console.log('step: looking for download page')

    browser.url('/download')

    download.links()[0].waitForDisplayed()

    console.log('on download page')
}

module.exports = download