/**
 * Section 2 Lecture 7
 * 
 * @author: vivasoju
 * 
 * Steps:
 * 1. declare the test suite
 * 2. declare parameters and test suite
 * 3. declaration of it (test case)
 * 4. declaration of the test case name
 */
describe('Protractor early steps',function() {
	it('test case 1 - basic progam', function(){
		
		//protractor code
		//by default the browser is chrome
		browser.get("https://angularjs.org");

		browser.get('http://juliemr.github.io/protractor-demo/').then(function() {
			browser.sleep(9000);
			console.log("I am the last step to execute");
		});
	});
	
	it('test case 2 - close browser', function(){
		
	});
});