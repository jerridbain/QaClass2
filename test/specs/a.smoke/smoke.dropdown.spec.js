const dropDown = require('../../pages/dropDown.page')

describe('As a user, test the dropdown page\'s default setting', () => {

    it('Given I go to the dropdown page', () => {
        dropDown.goToDropDown()

    });

   it('Then validate that no option is selected', () => {
       dropDown.select().$$('option')[0].isSelected().must.be.true()
       dropDown.select().$$('option')[0].getText().must.equal('Please select an option')



   });
   it('And validate that all the other options are not selected', () => {
       dropDown.select().$$('option').forEach((opt) => {

        if (opt.getText() !== 'Please select an option') {
            opt.isSelected().must.be.false()
        }

       })

   });

   
        
})