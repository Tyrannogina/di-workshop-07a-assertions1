var chai = require('chai');
var assert = chai.assert;

suite('Unit Tests Exercise 2 - Definition', function(){
   test('is null defined?', function(){
    assert.isDefined(null);
   });
   test('is undefined defined?',function(){
    assert.isUndefined(undefined);
   });
   test('is hello defined?',function(){
    assert.isDefined('hello');
   });
});
