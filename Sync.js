/***
 * Section 9 Lecture 55
 * Handling syncronization with protractor
 * 
 * @author: juanlvo
 */
describe('Handling syncronization with protractor', function() {
    it('test case 1', function() {

        browser.waitForAngularEnabled(false);
        browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');

        element(by.css("a[href*='loadAjax']")).click();

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);

        element(by.id('results')).getText().then(function(text) {
            console.log(text);
        });
    });
});