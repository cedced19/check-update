'use strict';
var latest = require('./lib/latest-version.js'), chalk = require('chalk'), stringLength = require('./lib/string-length.js');
module.exports = function (options) {
  latest(options.packageName, function (err, latestVersion) {
    if (err) {
      chalk.red('\n Someting went wrong: \n' + err);
    }
      
    var line1, line2, contentWidth, top, bottom, side, line1rest, line2rest, message;
    var fill = function (str, count) {
      return new Array(count + 1).join(str);
    };
      
    if (latestVersion == options.packageVersion) {
      line1 = 'You have the latest version of this software' + chalk.dim(' (current: ' + options.packageVersion + ')') + ' ';
      contentWidth = stringLength(line1);
      top = chalk.yellow('\u250C' + fill('\u2500', contentWidth) + '\u2510');
      bottom = chalk.yellow('\u2514' + fill('\u2500', contentWidth) + '\u2518');
      side = chalk.yellow('\u2502');
      line1rest = contentWidth - stringLength(line1);
      message = '\n\n' + top + '\n' + side + line1 + fill(' ', line1rest) + side + '\n' + bottom + '\n';
        
    } else {
        
      line1 = ' Update available: ' + chalk.green.bold(latestVersion) + chalk.dim(' (current: ' + options.packageVersion + ')') + ' ';
        
      if (options.isCLI) {
        line2 = ' Run ' + chalk.blue('npm update -g ' + options.packageName) + ' to update. ';
      } else {
        line2 = ' Run ' + chalk.blue('npm update ' + options.packageName) + ' to update. ';
      }
        
      contentWidth = Math.max(stringLength(line1), stringLength(line2));
      top = chalk.yellow('\u250C' + fill('\u2500', contentWidth) + '\u2510');
      bottom = chalk.yellow('\u2514' + fill('\u2500', contentWidth) + '\u2518');
      side = chalk.yellow('\u2502');
      line1rest = contentWidth - stringLength(line1);
      line2rest = contentWidth - stringLength(line2);
      message = '\n\n' + top + '\n' + side + line1 + fill(' ', line1rest) + side + '\n' + side + line2 + fill(' ', line2rest) + side + '\n' + bottom + '\n';
    }
    console.log(message);
  });
};