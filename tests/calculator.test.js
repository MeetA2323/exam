const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateSimpleInterest } = require('../calculator');

test('calculates simple interest correctly', () => {
  assert.equal(calculateSimpleInterest(1000, 5, 2), 100);
});

test('handles zero values gracefully', () => {
  assert.equal(calculateSimpleInterest(0, 5, 2), 0);
});
