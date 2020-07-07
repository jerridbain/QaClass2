const download = require('../../pages/download.page')
const downloadDir = './tempDownload'

const fs = require('fs')
const path = require('path')

let titles = []
let files = []


describe('As a user, test ability to download links', () => {
    


    it('Given I am on the file download page', () => {
        download.goToDownload()
    });

    it('When I click on all of the links', () => {
        download.link().forEach((link)=> {

            if (link.getText() !== 'Elemental Selenium' && !link.getHTML().includes('github')) {
                
                titles.push(link.getText())
                link.click()
                
            }


        })
    });

    it('Then verify that the downloads exist', () => {
        
        files = fs.readdirSync(downloadDir)

        
        files.length.must.equal(titles.length)
    });

    it('And verify the titles are equal', () => {
        
        files.forEach((file)=> {
            titles.includes(file)
        })
        
    });

    after('teardown', () => {
        files.forEach((file)=> {
            fs.unlinkSync(`${downloadDir}/${file}`)
            
        });
        
    });
});