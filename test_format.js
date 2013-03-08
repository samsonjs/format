var filename = process.argv[2] || './format.js'
  , format = require(filename)
  , printf = format.printf
  ;

console.log('Testing printf:');
printf('hello');
console.log('(expected "hello")');
printf('hello %s', 'sami');
console.log('(expected "hello sami")');
printf('b: %b\nc: %c\nd: %d\nf: %f\no: %o\ns: %s\nx: %x\nX: %X', 42, 65, 42*42, 42*42*42/1000000000, 255, 'sami', 0xfeedface, 0xc0ffee);
console.log('(expected "b: 101010\nc: A\nd: 1764\nf: 0.000074\no: 0377\ns: sami\nx: 0xfeedface\nX: 0xC0FFEE")');
console.log('(passed if the output looks ok)');

function assertEqual(a, b) {
    if (a !== b) throw new Error('assertion failed, ' + a + ' !== ' + b);
}

console.log('Testing format:');
assertEqual(format.format('hello'), 'hello');
assertEqual(format.format('hello %s', 'sami'), 'hello sami');
assertEqual(format.format('b: %b\nc: %c\nd: %d\nf: %f\no: %o\ns: %s\nx: %x\nX: %X', 42, 65, 42*42, 42*42*42/1000000000, 255, 'sami', 0xfeedface, 0xc0ffee), "b: 101010\nc: A\nd: 1764\nf: 0.000074\no: 0377\ns: sami\nx: 0xfeedface\nX: 0xC0FFEE");
console.log('(pass)');

console.log('all passed');
