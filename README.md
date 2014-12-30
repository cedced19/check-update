# check-update [![Build Status](https://travis-ci.org/cedced19/check-update.svg?branch=master)](https://travis-ci.org/cedced19/check-update)

Inform users of your package of updates.

![](https://raw.githubusercontent.com/cedced19/check-update/master/demo.png)

## Example

```js
var checkUpdate = require('check-update');
var pkg = require('./package.json');

checkUpdate({packageName: pkg.name, packageVersion: pkg.version});
```