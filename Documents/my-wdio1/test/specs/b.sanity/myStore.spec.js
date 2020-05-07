import basePage from "../../pages/base.page";
import inputs from "../../data/inputs.json"

const myStorePage = new basePage()


describe('As a User, test the my store page header', () => {


    it('Given I go to my store page', () => {
        myStorePage.goToHomePage()
    });

    it('Then verify the elements exist', () => {
        myStorePage.aHref1.waitForDisplayed()   

    });

    it('When I click on aHref1', () => {
        myStorePage.aHref1.click()

    });

    it('And then I click aHref4', () => {
        myStorePage.aHref4.click()
    });

    it('And then I move over top of a class', () => {
        myStorePage.img.moveTo()

    });

    it('Then verify the elements exist', () => {
        myStorePage.aClass1.waitForDisplayed()
        

    });

    it('And then I click a class', () => {
        myStorePage.aClass1.click()

    });

    it('Then verify the elements exist', () => {
        myStorePage.aClass2.waitForDisplayed()
        

    });

    it('And then I click aClass2', () => [
        myStorePage.aClass2.click()
    ]);

    it('Then verify the elements exist', () => {
        myStorePage.aClass3.waitForDisplayed()
        
    });

    it('And then I click aClass3', () => {
        myStorePage.aClass3.click()
    });
      
    it('Then I enter my email', () => {
        myStorePage.input1.waitForDisplayed()
        myStorePage.input1.setValue(inputs[0].email)
    });

    it('Then I enter my password', () => {
        myStorePage.input2.waitForDisplayed()
        myStorePage.input2.setValue(inputs[0].pw)
    });

    
    it('And then I click button 1', () => {
        myStorePage.button1.click()
    });

    it('Then verify the elements exist', () => {
        myStorePage.button2.waitForDisplayed()
        
    });

    it('And then I click button 2', () => {
        myStorePage.button2.click()
    });

    it('Then verify the input type', () => {
        myStorePage.box.waitForDisplayed()
        
    });
    
    it('And then I click box', () => {
        myStorePage.box.click()
    });

    it('And then I click button 3', () => {
        myStorePage.button3.click()
    });

    it('Then verify the a Class 4', () => {
        myStorePage.aClass4.waitForDisplayed()
        
    });

    it('And then I click a Class 4', () => {
        myStorePage.aClass4.click()
    });

    it('Then verify the  button 4', () => {
        myStorePage.button4.waitForDisplayed()
        
    });

    it('And then I click a button 4', () => {
        myStorePage.button4.click()
    });

    it('Then verify "ORDER CONFIRMATION"', () => {
        $('h1*=Order').waitForDisplayed()
    });


    

       
});