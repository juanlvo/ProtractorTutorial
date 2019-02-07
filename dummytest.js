/***
 * Test with edamis
 * @author: vivasoju
 */
describe('dummy test in edamis',function(){
    it('test 1',function(){

        browser.get("http://10.2.1.199:7001/edamis-portal-test/dashboard");

        element(by.xpath('//*[@id="responsive-main-nav"]/div[6]/a[1]')).click();
    });
});