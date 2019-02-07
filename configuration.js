/**
 * Section 2 Lecture 9
 * Importance of configuration file in protractor framework
 * 
 * @author: vivasoju
 */
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['dummytest.js'],
  //specs: ['spec1.js'],
  specs: ['ElementBasics.js'],
  onPrepare : function(){
    browser.manage().window().maximize();
  }
  //specs: ['dummytest.js']
};