/***
 * Section 6 Lecture 30
 * Understanding gloval variable in protractor
 * 
 * Section 6 Lecture 31
 * Usage of protractor locators
 * 
 * @author: vivasoj
 */
describe('Protractor element demo',function(){
    it('test case 1', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("1");
        browser.sleep(3000);
        element(by.id("gobutton")).click();
        browser.sleep(5000);
    });
});