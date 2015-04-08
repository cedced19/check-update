# check-update 

[![Build Status](https://travis-ci.org/cedced19/check-update.svg?branch=master)](https://travis-ci.org/cedced19/check-update)
[![NPM version](https://badge.fury.io/js/check-update.svg)](http://badge.fury.io/js/check-update)


Check if there are a update.

![](https://raw.githubusercontent.com/cedced19/check-update/master/demo.png)

```bash
npm install --save check-update
```

## Example

```js
var checkUpdate = require('check-update');
var pkg = require('./package.json');

checkUpdate({packageName: pkg.name, packageVersion: pkg.version, isCLI: true}, function(err, latestVersion, defaultMessage){
    if(!err){
        console.log(defaultMessage);
    }
});
```

### Options

#### packageName

*Required*  
Type: `string`

Define the package name for search in NPM.

#### packageVersion

*Required if you want a default message*   
Type: `string`

Define the version currently installed.

#### isCLI
 
Type: `boolean`  
Default: `false`

Define if your package is a cli.
