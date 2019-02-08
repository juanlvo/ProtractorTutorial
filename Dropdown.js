/***
 * Section 8 Lecture 44
 * Handling dropdowns
 * 
 * @author: vivasoju
 */
describe('Section 8 Lecture 44 - Handling dropdowns',function(){
    function Calc(a, b, c) {
        element(by.model("first")).sendKeys(a);
        
        element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(value){
                if(value==c){
                    item.click();
                }
            });
        });

        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();        
    }

    it('test case 1',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        /* Calc(2, 3, 'ADDITION');
        Calc(4, 3, 'DIVISION');
        Calc(8, 3, 'MODULO');
        Calc(2, 3, 'MULTIPLICATION');
        Calc(9, 3, 'SUBTRACTION');
        Calc(0, 3, 'ADDITION');
 */ //<- it works

        Calc(3, 5, 'MULTIPLICATION');
        Calc(3, 5, 'DIVISION');
        Calc(10, 6, 'ADDITION');
        
        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text);
            });
        });
    });
});