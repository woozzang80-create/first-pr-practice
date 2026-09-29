const assert = require('assert');
const { add, subtract } = require('../src/math');

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(-1, 1), 0);

assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(subtract(0, 4), -4);

console.log('All tests passed!');
