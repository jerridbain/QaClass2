export default class basePage {

    get mainHeader() {
        return $('H1')

    }

    get logo() {
        return $('//*[@id="header_logo"]/a/img')

    }

    get subHeader1() {
        return $('h2')

    }

    get aHref1() {
        return $('//*[@id="block_top_menu"]/ul/li[1]/a')

    }

    get aHref2() {
        return $('//*[@id="block_top_menu"]/ul/li[2]/a')
    
    }

    get aHref3() {
        return $('//*[@id="block_top_menu"]/ul/li[3]/a')

    }

    get aHref4() {
        return $('//*[@id="subcategories"]/ul/li[1]/div[1]/a')

    }

    get img() {
        return $('//*[@id="center_column"]/ul/li[1]/div/div[1]/div/a[1]/img')
    }


    get aClass1() {
        return $('//*[@id="center_column"]/ul/li[1]/div/div[2]/div[2]/a[1]')
    }

    get aClass2() {
        return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a')
    }

    get aClass3() {
        return $('//*[@id="center_column"]/p[2]/a[1]')
    }


    get input1() {
        return $('//*[@id="email"]')
    }

    get input2() {
        return $('//*[@id="passwd"]')
    }

    get button1() {
        return $('//*[@id="SubmitLogin"]')
    }

    
    get button2() {
        return $('//*[@id="center_column"]/form/p/button')
    }

    get button2() {
        return $('//*[@id="center_column"]/form/p/button')
    }

    get box() {
        return $('//*[@id="form"]/div/p[2]/label')
    }

    get button3() {
        return $('//*[@id="form"]/p/button')
    }

    get aClass4() {
        return $('//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a')
    }

    get button4() {
        return $('//*[@id="cart_navigation"]/button')
    }

    


    

    goToHomePage() {

        console.log('step: going to home page')

        browser.url('/')

        this.mainHeader.waitForDisplayed()

        console.log('step: on the home page')

    }

    login1(email) {
        // enter jerridbain@gmail.com   
        
    }

    login2(pw) {
        // enter emcor139
    }


    //** Utilities */

    assert(condition, timeout) {
        browser.waitUntil(()=>{
            return condition;
        }, timeout)
    }

}    