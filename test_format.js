var format = require('./format');
format.extendNativeStrings();
'hello'.printf();
'hello %s'.printf('sami');
'b: %b\nc: %c\nd: %d\nf: %f\no: %o\ns: %s\nx: %x\nX: %X'.printf(42, 65, 42*42, 42*42*42/1000000000, 255, 'sami', 0xfeedface, 0xc0ffee);
