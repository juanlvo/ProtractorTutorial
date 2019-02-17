/***
 * Section 9 Lecture 53
 * Frames example
 * 
 * @author: juanlvo
 */
describe('fram example', function() {
    it('test case 1', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://qaclickacademy.com/practice.php');

        browser.switchTo().frame("courses-iframe");
        element(by.xpath('//*[@id="homepage"]/header/div[1]/div/nav/ul/li[4]/a')).getText().then(function(text) {
            console.log(text);
        });
    });
});