module.exports = function() {
    'use strict';

    this.World = require('./support/world.js').World;

    this.Given(/^I go on the website "([^"]*)"$/, function(url, next) {
        this.driver.url(url).call(next);
    });

    this.Then(/^the title of the page is "([^"]*)"$/, function(title, next) {
        var assert = this.assert;

        this.driver.getTitle(function(err, result) {
            assert.equal(result, title, 'Expected ' + result + ' to be ' + title);
        }).call(next);


    });
};
