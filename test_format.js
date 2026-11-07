import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const testMin = process.env.FORMAT_TEST_MIN === '1';
const filename = testMin ? './builds/format.cjs' : './src/format.js';
const { default: format } = await import(filename);

if (testMin) {
  test('the browser build defines format, printf and vsprintf globals', async () => {
    const context = vm.createContext({});
    vm.runInContext(await readFile(new URL('./builds/format.min.js', import.meta.url), 'utf8'), context);
    assert.equal(vm.runInContext('format("%s %d", "hello", 42)', context), 'hello 42');
    assert.equal(vm.runInContext('vsprintf("%s %d", ["hello", 42])', context), 'hello 42');
    assert.equal(vm.runInContext('typeof printf', context), 'function');
  });
}

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
  [['%.0f', 1.6], '2'],
  [['%0.0f', 1.6], '2'],
  [['%.0f', 0.1], '0'],
  [['%0.0f', 0.1], '0'],
  [['%.0f', 0], '0'],
  [['%.0f', -1.6], '-2'],
  [['%f', 1.6], '1.600000'],
  [['%0f', 1.6], '1.600000'],
  [['%0f', 0.25], '0.250000'],
  [['foo %j', 42], 'foo 42'],
  [['foo %j', '42'], 'foo "42"']
];

tests.forEach(([args, expected]) => {
  test(`format(${args.map(arg => JSON.stringify(arg)).join(', ')})`, () => {
    assert.equal(format(...args), expected);
  });
});
