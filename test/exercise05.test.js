var chai = require('chai');
var assert = chai.assert;

suite('Unit Tests Exercise 5 - Equality', function() {
   test('is 12 equal to "12"?', function() {
    assert.equal(12, '12');
   });
   test('is 6*"2" equal to "12"?', function() {
    assert.equal( 6 * '2', '12');
   });
   test('is 6+"2" equal to "12"?', function() {
    assert.notEqual(6 + '2', '12');
   });
});
