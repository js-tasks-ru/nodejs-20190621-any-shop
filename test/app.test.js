const assert = require('assert');

function sum(a, b) { return a + b; }

describe('test suite', () => {
  it('sum 2 numbers', () => {
    assert.strictEqual(sum(1, 2), 3);
  })
});
