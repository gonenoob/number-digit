# number-digit
[![Build Status](https://travis-ci.org/gonenoob/Promise.svg?branch=master)]
(https://github.com/gonenoob/number-digit)

## Install

```sh
$ npm install --save number-digit
```

## Usage

```js
const { minInt, minDec, maxDec } = require('number-digit')
```

## Example

```js
const { minInt, minDec, maxDec } = require('number-digit')
let num = 27.1335
let minIntNum = minInt(num, 3) // 027.1335
let minDecNum = minDec(num, 5) //27.13350
let maxDecNum = maxDec(num, 3) //27.134
```
