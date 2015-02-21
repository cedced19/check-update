#!/usr/bin/env node
'use strict';
var latest = require('./lib/latest-version.js'), colors = require('colors');
var defaultMessage = function (options) {
  if (options.latestVersion == options.packageVersion) {
    return '\nYou have the latest version of ' + colors.green(options.packageName) + colors.dim(' (current: ' + options.packageVersion + ')');
  } else {
    var line1, line2;
    line1 = 'Update available: ' + colors.green(options.latestVersion) + colors.dim(' (current: ' + options.packageVersion + ')');
    if (options.isCLI) {
      line2 = 'Run ' + colors.cyan('npm update -g ' + options.packageName) + ' to update. ';
    } else {
      line2 = 'Run ' + colors.cyan('npm update ' + options.packageName) + ' to update. ';
    }
    return '\n' + line1 + '\n' + line2;
  }
};
module.exports = function (options, cb) {
  latest(options.packageName, function (err, latestVersion) {
    if (err) {
      cb(err);
      return;
    }
    options.latestVersion = latestVersion;
    cb(null, latestVersion, defaultMessage(options));
    return;
  });
};