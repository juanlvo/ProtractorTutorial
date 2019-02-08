/***
 * Test with edamis
 * @author: vivasoju
 */
describe('dummy test in edamis',function(){
    it('test 1',function(){

        browser.waitForAngularEnabled(false);
        browser.get("http://10.2.1.199:7001/edamis-portal-test/dashboard").then(function(){
            //element(by.xpath("//body[@id='responsive-main-nav']/div[6]/a[@title='European Commission']")).click();
            //element(by.css("[data-gr-c-s-loaded] div:nth-child(7) [title='European Commission']")).click();
            /* element.all(by.tagName("a")).count().then(function(number){
                console.log(number);
            }) */
            element(by.xpath("//*[@id='responsive-main-nav']/div[6]/a[1]")).click().then(function(){
                element(by.id("username")).sendKeys("whatlmi");
                element(by.id("password")).sendKeys("1234");
                element(by.xpath("//*[@id='loginForm']/input[13]")).click().then(function(){
                    browser.waitForAngularEnabled(true);
                    console.log("1");
                    browser.sleep(5000);
                    element(by.xpath("//*[@id='menu-inventory']/span")).click().then(function(){
                        console.log("2");
                        element(by.xpath("//*[@id='menu-child-domains']/a")).click();
                        browser.sleep(5000);
                        element(by.xpath("//*[@id='domain-filter']/div/div[1]/div[3]/div")).click().then(function(){
                            console.log("3");
                            browser.sleep(3000);
                            browser.actions().mouseMove(element(by.xpath("//*[@id='domain-filter-text']/div/div/div/div"))).click().perform().then(function(){
                               console.log("4");
                                element(by.xpath("//*[@id='domain-filter-text']/div/form/div/input")).sendKeys("EGR").then(function(){
                                    console.log("5");
                                    browser.actions().mouseMove(element(by.xpath("//*[@id='domain-filter-text']/div/form/div/span/button[1]/i"))).click().perform();
                                    browser.executeScript('window.scrollTo(0,100);')
                                    browser.sleep(5000);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});