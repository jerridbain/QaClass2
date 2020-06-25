const form = {}

// Locators

form.un = () => { return $('#username') }
form.pw = () => { return $('#password') }
form.button = () => { return $('button')}
form.flash = () => { return $('#flash') }


form.gotoFormAuth = () => {
    console.log('step: looking for form auth');

    browser.url('/login')

    form.button().waitForDisplayed()

    console.log('step: on form auth')

}

    
    

module.exports = form;