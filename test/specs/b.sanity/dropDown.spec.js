const dropDown = require('../../pages/dropDown.page')


describe('As a user, test ability to choose option 1 from the dropdown', () => {

    it('Given I go to the dropdown page', () => {
        dropDown.goToDropDown()

    });

    it('When I choose the first option', () => {
        dropDown.select().selectByVisibleText('Option 1')
        
    });

    it('Then validate that the first option is selected ', () => {
        dropDown.select().$$('Option')[1].isSelected().must.be.true()
    });

    it('And then validate that the others are not', () => {
        dropDown.select().$$('option').forEach((opt) => {

            if (opt.getText() !== 'Option 1') {
                opt.isSelected().must.be.false()
            }
    
           })
    });
    
});
