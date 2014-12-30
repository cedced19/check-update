'use strict';

var latest = require('./lib/latest-version.js');
var chalk = require('chalk');
var stringLength = require('./lib/string-length.js')

module.exports = function(options){
    latest(options.packageName, function (err, latestVersion) {
        if (err) {
            chalk.red('\n Someting went wrong: \n' + err);
        }
        
        options.latestVersion = latestVersion;
        
        var fill = function (str, count) {
                return Array(count + 1).join(str);
        };
        
        if(options.latestVersion == options.packageVersion){
            
            var line = 'You have the latest version of this software' + chalk.dim(' (current: ' + options.packageVersion + ')') + ' ';
            var contentWidth = stringLength(line);
            var top = chalk.yellow('┌' + fill('─', contentWidth) + '┐');
            var bottom = chalk.yellow('└' + fill('─', contentWidth) + '┘');
            var side = chalk.yellow('│');
            var linerest = contentWidth - stringLength(line);
            
            var message =
                '\n\n' +
                top + '\n' +
                side + line + fill(' ', linerest) + side + '\n' +
                bottom + '\n';
            console.log(message);
        }else{
            
            var line1 = ' Update available: ' + chalk.green.bold(options.latestVersion) + chalk.dim(' (current: ' + options.packageVersion + ')') + ' ';
            var line2 = ' Run ' + chalk.blue('npm update -g ' + options.packageName) + ' to update. ';
            var contentWidth = Math.max(stringLength(line1), stringLength(line2));
            var top = chalk.yellow('┌' + fill('─', contentWidth) + '┐');
            var bottom = chalk.yellow('└' + fill('─', contentWidth) + '┘');
            var side = chalk.yellow('│');
            var line1rest = contentWidth - stringLength(line1);
            var line2rest = contentWidth - stringLength(line2);
            
            var message =
                '\n\n' +
                top + '\n' +
                side + line1 + fill(' ', line1rest) + side + '\n' +
                side + line2 + fill(' ', line2rest) + side + '\n' +
                bottom + '\n';
            console.log(message);
        }
    });
}
