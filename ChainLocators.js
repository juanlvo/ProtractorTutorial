/***
 * Section 7 Lecture 38
 * Importance of chain locators
 * 
 * @author: vivasoju
 */
describe('Importance of chain locators',function(){
    it('test 1',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");
        browser.sleep(3000);
        element(by.id("gobutton")).click();

        //repeater, chain locators and css identical tags
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text);
        });
    });
});