/***
 * Section 7 Lecture 41
 * getting the list of elements with all methods in protractor
 * 
 * Section 7 Lecture 42
 * refactoring and practicing exercises on all chain locators
 * 
 * @author: vivasoju
 */
describe('Section 7 Lecture 41', function(){
    function Add(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();        
    }

    it('test 1',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        Add(2, 3);
        Add(4, 3);
        Add(8, 3);
        Add(2, 3);
        Add(9, 3);
        Add(0, 3);

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