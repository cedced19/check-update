'use strict';
var checkUpdate = require('./');

describe('checkUpdate', function() {
    var generateSettings = function () {
        return {
            packageName: 'check-update-tester',
            packageVersion: '0.0.1'
        }
    }; 
    
    it('should check for update', function() {
        checkUpdate(generateSettings({}));
    });
});