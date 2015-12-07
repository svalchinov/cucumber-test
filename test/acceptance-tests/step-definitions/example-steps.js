var tempResult;

module.exports = function(){
    'use strict';

    this.World = require('./support/world.js').World;

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
};
