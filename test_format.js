import assert from 'node:assert/strict'
import test from 'node:test'

const filename = process.env.FORMAT_TEST_MIN === '1' ? './builds/format.cjs' : './src/format.js'
const { default: format } = await import(filename)

const tests = [
  [['hello'], 'hello'],
  [['hello %s', 'sami'], 'hello sami'],
  [
    [
      'b: %b\nc: %c\nd: %d\nf: %f\no: %o\ns: %s\nx: %x\nX: %X',
      42,
      65,
      42 * 42,
      (42 * 42 * 42) / 1000000000,
      255,
      'sami',
      0xfeedface,
      0xc0ffee
    ],
    'b: 101010\nc: A\nd: 1764\nf: 0.000074\no: 0377\ns: sami\nx: 0xfeedface\nX: 0xC0FFEE'
  ],
  [['%.2f', 3.14159], '3.14'],
  [['%0.2f', 3.14159], '3.14'],
  [['%.2f', 0.1234], '.12'],
  [['%0.2f', 0.1234], '0.12'],
  [['foo %j', 42], 'foo 42'],
  [['foo %j', '42'], 'foo "42"']
]

tests.forEach(([args, expected]) => {
  test(`format(${args.map(arg => JSON.stringify(arg)).join(', ')})`, () => {
    assert.equal(format(...args), expected)
  })
})
