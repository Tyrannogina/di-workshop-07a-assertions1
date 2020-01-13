var chai = require('chai');
var assert = chai.assert;

suite('Unit Tests Exercise 4 - Truth', function() {
   test('is true true?', function() {
    assert.isTrue(true);
   });
   test('is a double negation true?', function() {
    assert.isTrue(!!true);
   });
   test('is a truthy object true?', function() {
    assert.isNotTrue('hello');
   });
});
