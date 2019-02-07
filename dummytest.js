/***
 * Test with edamis
 * @author: vivasoju
 */
describe('dummy test in edamis',function(){
    it('test 1',function(){

        browser.get("http://10.2.1.199:7001/edamis-portal-test/dashboard").then(function(){
            //element(by.xpath("//body[@id='responsive-main-nav']/div[6]/a[@title='European Commission']")).click();
            //element(by.css("[data-gr-c-s-loaded] div:nth-child(7) [title='European Commission']")).click();
            element(by.xpath("/html[1]/body[1]/div[6]/a[1]")).click();
        });
    });
});