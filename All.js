/***
 * Section 7 Lecture 41
 * getting the list of elements with all methods in protractor
 * 
 * @author: vivasoju
 */
describe('Section 7 Lecture 41', function(){
    it('test 1',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("7");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("8");
        element(by.id("gobutton")).click();

/*         element.all(by.repeater("result in memory")).count().then(function(number){
            console.log(number);
        }); */ /* <- we have 3 elements*/

        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text);
            });
        });
    });
});