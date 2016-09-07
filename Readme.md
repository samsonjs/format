format
======

printf, sprintf, and vsprintf for JavaScript

[![version 0.2.2 on npm](https://img.shields.io/badge/npm-0.2.2-brightgreen.svg?style=flat)](https://www.npmjs.com/package/format) [![node version 0.4 and up](https://img.shields.io/badge/node->=0.4-brightgreen.svg?style=flat)](https://www.npmjs.com/package/format) [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](https://sjs.mit-license.org)

Installation
============

npm install format

The code works in browsers as well, you can copy these functions into your project
or otherwise include them with your other JavaScript.

Usage
=====

    var format = require('format')
      , printf = format.printf
      , vsprintf = format.vsprintf
      // or if you want to keep it old school
      , sprintf = format

    // Print 'hello world'
    printf('%s world', 'hello')

    var what = 'life, the universe, and everything'
    format('%d is the answer to %s', 42, what)
    // => '42 is the answer to life, the universe, and everything'

    vsprintf('%d is the answer to %s', [42, what])
    // => '42 is the answer to life, the universe, and everything'

    // you can format values as JSON with %j
    var value = {answer: 42}
    format('%j', value)
    // => '{"answer":42}'

Supported format specifiers: b, c, d, f, j, o, s, x, and X.

See `man 3 printf` or `man 1 printf` for details. `j` is an extension that formats values as JSON.

Precision is supported for floating point numbers.

License
=======

Copyright 2010 - 2016 Sami Samhuri sami@samhuri.net

[MIT license](http://sjs.mit-license.org)

