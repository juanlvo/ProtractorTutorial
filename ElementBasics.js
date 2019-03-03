/***
 * Section 6 Lecture 30
 * Understanding gloval variable in protractor
 * 
 * Section 6 Lecture 31
 * Usage of protractor locators
 * 
 * Section 6 Lecture 32
 * Usage of protractor locators - part 2
 * 
 * Section 6 Lecture 33
 * Jasmine assertions to validate protractor test
 * 
 * Section 18 Lecture 105
 * Page object mechanism for protractor test
 * 
 * Section 18 Lecture 107
 * Driving the page with setup and TearDown method
 * 
 * @author: vivasoj
 */
//import { elementBasicsObject } from "./ElementBasicsObject";
//declare const browser, describe, it: any;

describe('Protractor element demo', function() {
/*     it('test case 1', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("1");
        browser.sleep(3000);
        element(by.id("gobutton")).click();
        browser.sleep(5000);
    }); */
    
    var elementBasicObject = require ("./ElementBasicsObject.js");

    beforeEach(function(){
        elementBasicObject.getURL();
    });
    
    it('test case 2', function(){
        //browser.get('http://juliemr.github.io/protractor-demo/');
        elementBasicObject.firstInput.sendKeys("3");
        elementBasicObject.secondInput.sendKeys("5");
        browser.sleep(3000);
        elementBasicObject.gobutton.click();
        elementBasicObject.result.getText().then(function(text){
            expect(text).toBe("8");
        });
    });

    afterEach(function() {
        console.log('Test completed');
    });
});