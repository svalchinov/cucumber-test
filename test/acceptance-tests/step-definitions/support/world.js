var webdriverjs = require('webdriverio'),
	assert = require('assert');

var client = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'}, logLevel: 'verbose' });

client.init();

var World = function (callback) {
	'use strict';

	this.assert = assert;
	this.browser = client; // browser will be available in step definitions

	callback();
};

exports.World = World;
