'use strict';
var reAstral = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
var reAnsi = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/g;
module.exports = function (str) {
    return typeof str === 'string' ? str.replace(reAstral, ' ').replace(reAnsi, '').length : str;
};