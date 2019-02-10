/***
 * Section 8 Lecture 46
 * Actions and its importance in angular
 * 
 * @author: juanlvo
 */
describe('Section 8 Lecture 46',function(){
    it('test case 1', function(){

        browser.get('http://posse.com/');

        element(By.model('userInputQuery')).sendKeys('river');
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys('london')).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
            browser.sleep(3000);
        });
    });
});