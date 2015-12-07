var webdriverjs = require('webdriverio'),
    assert = require('assert');

var client = webdriverjs.remote({
    desiredCapabilities: { browserName: 'phantomjs'},
    logLevel: 'verbose'
});

var World = function(callback) {
    'use strict';
    this.driver = client;
	this.assert = assert;
    this.driver.init(callback);
};

exports.World = World;
