# deferrable
[![Build Status](https://travis-ci.org/Sdju/js-defer.svg?branch=master)](https://travis-ci.org/Sdju/js-defer)

A npm module with go-like defer implementation
## Installation 
```sh
npm install deferrable --save
yarn add deferrable
bower install deferrable --save
```
## Usage
### Javascript
```javascript
const deferable = require('deferrable');
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
import deferrable from 'deferrable';
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
  var deferrable = require('deferrable');
});
```
## Test 
```sh
npm run test
```
