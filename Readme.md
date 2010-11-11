format
======

printf and sprintf for JavaScript


Installation
============

npm install format


Usage
=====

    var Format = require('format')
      , printf = Format.printf
      , format = Format.format // aliased as sprintf as well

    // Print 'hello world'
    printf('%s world', 'hello')

    var what = 'life, the universe, and everything'
    format('%d is the answer to %s', 42, what)
    // => '42 is the answer to life, the universe, and everything'

Supported format specifiers: b, c, d, f, o, s, x, and X.

See `man 3 printf` or `man 1 printf` for details.


License
=======

Copyright 2010 Sami Samhuri sami.samhuri@gmail.com

MIT (see included [LICENSE](/samsonjs/format/blob/master/LICENSE))
