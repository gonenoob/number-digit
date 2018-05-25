# number-digit

## Install

```sh
$ npm install --save number-digit
```

## Usage

```js
const { minInt, minDec, maxDec, minDig, maxDig } = require('number-digit')
```

## Example

```js
const { minInt, minDec, maxDec, minDig, maxDig } = require('number-digit')
let num = 27.1335
let minIntNum = minInt(num, 3) // 027.1335
let minDecNum = minDec(num, 5) //27.13350
let maxDecNum = maxDec(num, 3) //27.134
let minDigNum = minDig(num, 7) //27.13350
let maxDigNum = maxDig(num, 3) //27.1
let maxDigNum1 = maxDig(num, 1) //30
```
