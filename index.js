#!/usr/bin/env node
'use strict';
var latest = require('./lib/latest-version.js'), colors = require('colors'), stringLength = require('./lib/string-length.js');
var defaultMessage = function (options) {
  var line1, line2, contentWidth, top, bottom, side, line1rest, line2rest, message;
  var fill = function (str, count) {
    return new Array(count + 1).join(str);
  };
  if (options.latestVersion == options.packageVersion) {
    line1 = 'You have the latest version of ' + options.packageName + colors.dim(' (current: ' + options.packageVersion + ')') + ' ';
    contentWidth = stringLength(line1);
    top = colors.yellow('\u250C' + fill('\u2500', contentWidth) + '\u2510');
    bottom = colors.yellow('\u2514' + fill('\u2500', contentWidth) + '\u2518');
    side = colors.yellow('\u2502');
    line1rest = contentWidth - stringLength(line1);
    return '\n\n' + top + '\n' + side + line1 + fill(' ', line1rest) + side + '\n' + bottom + '\n';
  } else {
    line1 = ' Update available: ' + colors.green.bold(options.latestVersion) + colors.dim(' (current: ' + options.packageVersion + ')') + ' ';
    if (options.isCLI) {
      line2 = ' Run ' + colors.blue('npm update -g ' + options.packageName) + ' to update. ';
    } else {
      line2 = ' Run ' + colors.blue('npm update ' + options.packageName) + ' to update. ';
    }
    contentWidth = Math.max(stringLength(line1), stringLength(line2));
    top = colors.yellow('\u250C' + fill('\u2500', contentWidth) + '\u2510');
    bottom = colors.yellow('\u2514' + fill('\u2500', contentWidth) + '\u2518');
    side = colors.yellow('\u2502');
    line1rest = contentWidth - stringLength(line1);
    line2rest = contentWidth - stringLength(line2);
    return '\n\n' + top + '\n' + side + line1 + fill(' ', line1rest) + side + '\n' + side + line2 + fill(' ', line2rest) + side + '\n' + bottom + '\n';
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