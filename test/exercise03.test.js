var chai = require('chai');
var assert = chai.assert;

suite('Unit Tests Exercise 3 - Truthyness', function(){
      test('Is null truthy?', function(){
        assert.isNotOk(null);
      });
      test('Is a string truthy?',function(){
        assert.isOk("I'm truthy");
      });
      test('Is true truthy?',function(){
        assert.isOk(true);
      });
    });
