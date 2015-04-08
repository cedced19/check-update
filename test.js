'use strict';
var checkUpdate = require('./');
describe('checkUpdate', function () {
    
  it('should check for update and display true', function () {
    checkUpdate({
      packageName: 'check-update-tester',
      packageVersion: '0.0.1',
      isCLI: true
    }, function (err, lastestVersion, defaultMessage) {
      if (!err) {
        console.log(defaultMessage);
      }
    });
  });
    

  it('should check for update and display false', function () {
    checkUpdate({
      packageName: 'check-update-tester',
      packageVersion: '0.0.2'
    }, function (err, lastestVersion, defaultMessage) {
      if (!err) {
        console.log(defaultMessage);
      }
    });
  });
  
  it('should check for update and display the version', function () {
    checkUpdate({packageName: 'check-update-tester'}, function (err, lastestVersion) {
      if (!err) {
        console.log(lastestVersion);
      }
    });
  });
});