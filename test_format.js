var sys = require('sys')
  , format = require('./format')
  ;
format.extendNativeStrings();

sys.puts('Testing printf:');
'hello'.printf();
sys.puts('(expected "hello")');
'hello %s'.printf('sami');
sys.puts('(expected "hello sami")');
'b: %b\nc: %c\nd: %d\nf: %f\no: %o\ns: %s\nx: %x\nX: %X'.printf(42, 65, 42*42, 42*42*42/1000000000, 255, 'sami', 0xfeedface, 0xc0ffee);
sys.puts('(expected "b: 101010\nc: A\nd: 1764\nf: 0.000074\no: 0377\ns: sami\nx: 0xfeedface\nX: 0xC0FFEE")');
sys.puts('(passed if the output looks ok)');

function assertEqual(a, b) {
    if (a !== b) throw new Error('assertion failed, ' + a + ' !== ' + b);
}

sys.puts('Testing format:');
assertEqual('hello'.format(), 'hello');
assertEqual('hello %s'.format('sami'), 'hello sami');
assertEqual('b: %b\nc: %c\nd: %d\nf: %f\no: %o\ns: %s\nx: %x\nX: %X'.format(42, 65, 42*42, 42*42*42/1000000000, 255, 'sami', 0xfeedface, 0xc0ffee), "b: 101010\nc: A\nd: 1764\nf: 0.000074\no: 0377\ns: sami\nx: 0xfeedface\nX: 0xC0FFEE");
sys.puts('(pass)');

sys.puts('all passed');