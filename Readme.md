format
======

printf, sprintf, and vsprintf for JavaScript

[![version 0.2.2 on npm](https://img.shields.io/badge/npm-0.2.2-brightgreen.svg?style=flat)](https://www.npmjs.com/package/format) [![node version 0.4 and up](https://img.shields.io/badge/node->=0.4-brightgreen.svg?style=flat)](https://www.npmjs.com/package/format) [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](https://sjs.mit-license.org)

Installation
============

`npm install format`

The code works in browsers as well, you can copy these functions into your project
or otherwise include them with your other JavaScript.

Usage
=====
```js
const format = require('format')
const { printf, vsprintf } = format
// or if you want to keep it old school
const sprintf = format

// Print 'hello world'
printf('%s world', 'hello')

const what = 'life, the universe, and everything'
const out = format('%d is the answer to %s', 42, what)
console.log(out)
// => '42 is the answer to life, the universe, and everything'

vsprintf('%d is the answer to %s', [42, what])
// => '42 is the answer to life, the universe, and everything'

// you can format values as JSON with %j
const value = { answer: 42 }
const out2 = format('%j', value)
console.log(out2)
// => '{"answer":42}'
```

Supported format specifiers: b, c, d, f, j, o, s, x, and X.

See `man 3 printf` or `man 1 printf` for details. `j` is an extension that formats values as JSON.

Precision is supported for floating point numbers.

License
=======

Copyright 2010 - 2026 Sami Samhuri sami@samhuri.net

[MIT license](http://sjs.mit-license.org)
