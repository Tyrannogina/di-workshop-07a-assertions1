var chai = require("chai");
var assert = chai.assert;

/** Delete this line and the one at the bottom when you're ready for exercise 7

suite("Unit Tests Exercise 7 - Deep Equality", function() {
  // .deepEqual(), .notDeepEqual()
  // .deepEqual() asserts that two objects or arrays are 'deep equal'
  test("Are two shuffled objects deeply equal?", function() {
    assert.fail(
      { a: "1", b: 5 },
      { b: 5, a: "1" },
      "Key order doesn't matter"
    );
  });
  test("Are two shuffled arrays deeply equal?", function() {
    assert.fail(
      { a: [5, 6] },
      { a: [6, 5] },
      "Array elements position does matter!!"
    );
  });
});

// Deep equality will check the contents of an array or object,
// so two identical objects or arrays will be viewed as equal.
// That said, arrays with the same objects in different orders
// will not be viewed as deeply equal unless they are sorted.

// Delete this line when you're ready for exercise 7 **/
