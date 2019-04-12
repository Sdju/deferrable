# deferrable
[![Build Status](https://travis-ci.org/Sdju/deferrable.svg?branch=master)](https://travis-ci.org/Sdju/deferrable)
[![NPM version](https://img.shields.io/npm/v/deferrable.svg?style=flat-square)](https://www.npmjs.com/package/deferrable)
[![Downloads](http://img.shields.io/npm/dm/deferrable.svg?style=flat-square)](https://npmjs.org/package/deferrable)

A npm module with go-like defer implementation
## Installation 
```sh
npm install js-deferrable --save
yarn add js-deferrable
bower install js-deferrable --save
```
## Usage
### Javascript
```javascript
const deferable = require('js-deferrable');
const fs = require('fs');

const someFunction = deferrable(async (defer, arg1, arg2) => {
    const desc = await fs.open('someFile.txt');
    defer(()=>fs.close(desc));
    // ...
    // some actions with file, fs.close will be called automaticalle
});

const someSyncFunction = deferrable((defer, arg1, arg2) => {
        const desc = fs.openSync('someFile.txt');
        defer(()=>fs.closeSync(desc));
        // ...
        // some actions with file, fs.closeSync will be called automaticalle
}, true)
```
### TypeScript
```typescript
import deferrable from 'js-deferrable';
import * as fs from require('fs');

const someFunction = deferrable(async (defer, arg1, arg2) => {
    const desc: number = await fs.open('someFile.txt');
    defer(()=>fs.close(desc));
    // ...
    // some actions with file, fs.close will be called automaticalle
});
```
### AMD
```javascript
define(function(require,exports,module){
  var deferrable = require('js-deferrable');
});
```
## Test 
```sh
npm run test
```
