//
// format - printf-like string formatting for JavaScript
// github.com/samsonjs/format
// @_sjs
//
// Copyright 2010 - 2013 Sami Samhuri <sami@samhuri.net>
//
// MIT License
// http://sjs.mit-license.org
//

function format(fmt) {
  let argIndex = 1, // skip initial format argument
    args = [].slice.call(arguments),
    i = 0,
    n = fmt.length,
    result = '',
    c,
    escaped = false,
    arg,
    tmp,
    leadingZero = false,
    hasDot,
    precision,
    nextArg = function () {
      return args[argIndex++]
    },
    slurpNumber = function () {
      let digits = ''
      while (/\d/.test(fmt[i])) {
        digits += fmt[i++]
        c = fmt[i]
      }
      return digits.length > 0 ? parseInt(digits) : null
    }
  for (; i < n; ++i) {
    c = fmt[i]
    if (escaped) {
      escaped = false
      hasDot = true
      if (c == '.') {
        leadingZero = false
        c = fmt[++i]
      } else if (c == '0' && fmt[i + 1] == '.') {
        leadingZero = true
        i += 2
        c = fmt[i]
      } else {
        leadingZero = true
        hasDot = false
      }
      precision = slurpNumber()
      // Without a dot, a 0 is printf's zero-padding flag, not a precision.
      if (!hasDot && precision === 0) precision = null
      switch (c) {
        case 'b': // number in binary
          result += parseInt(nextArg(), 10).toString(2)
          break
        case 'c': // character
          arg = nextArg()
          if (typeof arg === 'string' || arg instanceof String) result += arg
          else result += String.fromCharCode(parseInt(arg, 10))
          break
        case 'd': // number in decimal
          result += parseInt(nextArg(), 10)
          break
        case 'f': // floating point number
          tmp = parseFloat(nextArg()).toFixed(precision === null ? 6 : precision)
          result += leadingZero ? tmp : tmp.replace(/^0\./, '.')
          break
        case 'j': // JSON
          result += JSON.stringify(nextArg())
          break
        case 'o': // number in octal
          result += '0' + parseInt(nextArg(), 10).toString(8)
          break
        case 's': // string
          result += nextArg()
          break
        case 'x': // lowercase hexadecimal
          result += '0x' + parseInt(nextArg(), 10).toString(16)
          break
        case 'X': // uppercase hexadecimal
          result += '0x' + parseInt(nextArg(), 10).toString(16).toUpperCase()
          break
        default:
          result += c
          break
      }
    } else if (c === '%') {
      escaped = true
    } else {
      result += c
    }
  }
  return result
}

function printf(/* ... */) {
  console.log(format.apply(null, arguments))
}

function vsprintf(fmt, replacements) {
  return format.apply(null, [fmt].concat(replacements))
}
format.format = format
format.printf = printf
format.vsprintf = vsprintf

export default format
