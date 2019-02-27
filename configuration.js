/**
 * Section 2 Lecture 9
 * Importance of configuration file in protractor framework
 * 
 * Section 6 Lecture 35
 * Running protractor test on firefox and internet explorer (not working with the last driver :( )
 * 
 * @author: vivasoju
 */
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
  }
  //specs: ['dummytest.js']
};