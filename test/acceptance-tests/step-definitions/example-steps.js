var tempResult;

module.exports = function(){
    'use strict';

    this.World = require('../features/support/world.js').World; 

    // background
    this.Given(/^I go on the website "([^"]*)"$/, function(url, next) {
        this.browser
        .url(url)
        .call(next);
    });

    // step defs
    this.When(/^I use getTitle\(\) to get the title of this website$/, function(next) {
        var assert = this.assert;
        this.browser
        .getTitle(function(err, title) {
            tempResult = title;
            next();
        });
    });

    this.Then(/^the command should return "([^"]*)"$/, function(result, next) {
        var assert = this.assert;
        assert(tempResult === result , ' result of command is "'+ tempResult + '" but should be "'+ result);
        next();
    });


    this.When(/^I try to save a screenshot$/, function(next) {
        next();
    });

    this.Then(/^the command should capture a screenshot$/, function(next) {   
        this.browser.saveScreenshot('test/.tmp/screenshots/github.png',function(err){
            next();
        });
    });
};