var chai = require('chai');
var assert = chai.assert;

suite('Unit Tests Exercise 7 - Deep Equality', function() {
  test('Are two shuffled objects deeply equal?', function() {
    assert.deepEqual({a: '1', b: 5}, {b: 5, a: '1'});
  });
  test('Are two shuffled arrays deeply equal?', function() {
    assert.notDeepEqual({a: [5, 6]}, {a: [6, 5]});
  });
})
