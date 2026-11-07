format
======

printf, sprintf, and vsprintf for JavaScript

[![version on npm](https://img.shields.io/npm/v/format.svg?style=flat-square)](https://www.npmjs.com/package/format) [![node version 12 and up](https://img.shields.io/badge/node->=12-brightgreen.svg?style=flat)](https://www.npmjs.com/package/format) [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](https://sjs.mit-license.org)

Installation
============

`npm install format`

In a browser without a bundler, load the minified build with a script tag. It defines `format`, `printf`, and `vsprintf` as globals.

```html
<script src="https://cdn.jsdelivr.net/npm/format@1/builds/format.min.js"></script>
```

Usage
=====

```js
import format from 'format';
// or with CommonJS
// const format = require('format');
const { printf, vsprintf } = format;
// or if you want to keep it old school
const sprintf = format;

// Print 'hello world'
printf('%s world', 'hello');

const what = 'life, the universe, and everything';
const out = format('%d is the answer to %s', 42, what);
console.log(out);
// => '42 is the answer to life, the universe, and everything'

vsprintf('%d is the answer to %s', [42, what]);
// => '42 is the answer to life, the universe, and everything'

// you can format values as JSON with %j
const value = { answer: 42 };
const out2 = format('%j', value);
console.log(out2);
// => '{"answer":42}'
```

Supported format specifiers: b, c, d, f, j, o, s, x, and X.

See `man 3 printf` or `man 1 printf` for details. `j` is an extension that formats values as JSON.

Precision is supported for floating point numbers.

License
=======

Copyright 2010 - 2026 Sami Samhuri sami@samhuri.net

[MIT license](http://sjs.mit-license.org)
