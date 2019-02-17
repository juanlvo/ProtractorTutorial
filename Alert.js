/***
 * Section 8 Lecture 51
 * Alert Handler example
 * 
 * @author: juanlvo
 */
describe('Alert Handler example', function() {
    it('test case 1', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://qaclickacademy.com/practice.php');

        element(by.id('confirmbtn')).click();

        browser.sleep(5000);

        browser.switchTo().alert().accept().then(function() {
            browser.sleep(5000);
        })

    });
});