/**
 * Section 2 Lecture 9
 * Importance of configuration file in protractor framework
 * 
 * Section 6 Lecture 35
 * Running protractor test on firefox and internet explorer (not working with the last driver :( )
 * 
 * Section 19 Lecture 108
 * onPrepare functionality in configuration file for preloading data
 * 
 * Section 21 Lecture 116
 * generating client reports for protractor test
 * 
 * Section 21 Lecture 117
 * tag configurqtion to control test script execution
 * 
 * @author: vivasoju
 */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['dummytest.js'],
  //specs: ['spec1.js'],
  specs: ['ElementBasics.js'],
  //specs: ['ChainLocators.js'],
  //specs: ['All.js'],
  //specs: ['Dropdown.js'],
  //specs: ['Actions.js'],
  //specs: ['Alert.js'],
  //specs: ['Frames.js'],
  //specs: ['Sync.js'],
  //specs: ['jsobjectdemo.js'],
/*    capabilities: {
    'browserName': 'firefox'
  },  */
/*   capabilities: {
    'browserName': 'internet explorer',
    'platform': 'ANY',
    'version': '11'
    },  */
  onPrepare : function(){
    browser.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './test-reports'
      })
    );
  },
  suites: {
    Smoke : ['Alert.js', 'Dropdown.js'],
    Regression : 'ElementBasics.js'
  },
  jasmineNodeOpts: {
    showColors: true,
  }
};