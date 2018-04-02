# js-defer
A npm module with go-like defer implementation
## Installation 
```sh
npm install js-defer --save
yarn add js-defer
bower install js-defer --save
```
## Usage
### Javascript
```javascript
const deferable = require('js-defer').deferable;
const fs = require('fs');

const someFunction = deferable(async (defer, arg1, arg2) => {
    const desc = await fs.open('someFile.txt');
    defer(()=>fs.close(desc));
    // ...
    // some actions with file, fs.close will be called automaticalle
});
```
### TypeScript
```typescript
import { deferable } from 'js-defer';
import * as fs from require('fs');

const someFunction = deferable(async (defer, arg1, arg2) => {
    const desc: number = await fs.open('someFile.txt');
    defer(()=>fs.close(desc));
    // ...
    // some actions with file, fs.close will be called automaticalle
});
```
### AMD
```javascript
define(function(require,exports,module){
  var deferable = require('js-defer').deferable;
});
```
## Test 
```sh
npm run test
```
