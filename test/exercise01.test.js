var chai = require('chai');
var assert = chai.assert;

suite('Unit Tests Exercise 1 - The Void', function(){
    test('Is null null?', function(){
      assert.isNull(null);
    });
    test('Is 1 null?', function(){
      assert.isNotNull(1);
    });
  });
