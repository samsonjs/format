//
// format, printf-like string formatting for JavaScript
// github.com/samsonjs/format
//
// Copyright 2010 - 2011 Sami Samhuri <sami@samhuri.net>
// ISC license
//

exports.printf = function(/* ... */) {
    console.log(exports.format.apply(this, arguments));
};

exports.format = function(format) {
    var argIndex = 1 // skip initial format argument
      , args = [].slice.call(arguments)
      , i = 0
      , n = format.length
      , result = ''
      , c
      , escaped = false
      , arg
      , precision
      , nextArg = function() { return args[argIndex++]; }
      , slurpNumber = function() {
              var digits = '';
              while (format[i].match(/\d/))
                  digits += format[i++];
              return digits.length > 0 ? parseInt(digits) : null;
          }
      ;
    for (; i < n; ++i) {
        c = format[i];
        if (escaped) {
            escaped = false;
            precision = slurpNumber();
            switch (c) {
            case 'b': // number in binary
                result += parseInt(nextArg(), 10).toString(2);
                break;
            case 'c': // character
                arg = nextArg();
                if (typeof arg === 'string' || arg instanceof String)
                    result += arg;
                else
                    result += String.fromCharCode(parseInt(arg, 10));
                break;
            case 'd': // number in decimal
                result += parseInt(nextArg(), 10);
                break;
            case 'f': // floating point number
                result += parseFloat(nextArg()).toFixed(precision || 6);
                break;
            case 'o': // number in octal
                result += '0' + parseInt(nextArg(), 10).toString(8);
                break;
            case 's': // string
                result += nextArg();
                break;
            case 'x': // lowercase hexadecimal
                result += '0x' + parseInt(nextArg(), 10).toString(16);
                break;
            case 'X': // uppercase hexadecimal
                result += '0x' + parseInt(nextArg(), 10).toString(16).toUpperCase();
                break;
            default:
                result += c;
                break;
            }
        } else if (c === '%') {
            escaped = true;
        } else {
            result += c;
        }
    }
    return result;
};

exports.vsprintf = function(format, replacements) {
    return exports.format.apply(this, [format].concat(replacements));
};

exports.sprintf = exports.format;
