import { browser, element, by, ElementFinder } from 'protractor';
 
describe('Example E2E Test', () => {
 
  beforeEach(() => {
    browser.get('');
    browser.ignoreSynchronization = true;
  });

  it('the user can go to settings page', () =>{
    browser.driver.sleep(5000);

    var button = element(by.id('settingsButton'));
    browser.driver.sleep(5000);
    button.click().then(()=>{
      
      
      try{
        browser.driver.sleep(5000);
        var settingContent = element(by.id('meetUpContent'));
        browser.driver.sleep(5000);
        settingContent.getWebElement();
        browser.driver.sleep(5000);
        expect(true).toBe(true);
      }
      catch(err)
      {
        expect(true).toBe(false);
      }
       
   
      
    })
  
  });
 
  it('the user is redirected to the dashboard (groups page)', () => {

    // Wait for the page transition
    browser.driver.sleep(5000);
      
     // expect(true).toBe(true);
      expect(element(by.css('.spinner')) // Grab the label of the list item
        .getTagName()).toBe("ion-spinner")
  });


 
});