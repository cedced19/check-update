'use strict';
var got = require('got'),
url = require('rc')('npm').registry || 'http://registry.npmjs.org/';


module.exports = function (name, cb) {
	got(url + encodeURIComponent(name) + '/latest', function (err, data) {
		if (err === 404) {
			cb(new Error('Package or version doesn\'t exist on this registery'));
			return;
		}

		if (err) {
			cb(err);
			return;
		}

		cb(null, JSON.parse(data).version);
	});
};