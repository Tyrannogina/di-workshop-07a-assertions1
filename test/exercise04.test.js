var chai = require("chai");
var assert = chai.assert;

/** Delete this line and the one at the bottom when you're ready for exercise 4

suite("Unit Tests Exercise 4 - Truth", function() {
  // 4 - Use assert.isTrue() or assert.isNotTrue() to make the tests pass.
  // .isTrue(true) and .isNotTrue(everything else) will work.
  // .isFalse() and .isNotFalse() also exist.

  test("is true true?", function() {
    assert.fail(true, "true is true");
  });
  test("is a double negation true?", function() {
    assert.fail(!!true, "Is this true?");
  });
  test("is a truthy object true?", function() {
    assert.fail({greeting: "Hello"}, "A truthy object is not true");
  });
});

// true and false are the cornerstones of boolean, i.e. yes or no
// logic. There are more assertions like these: .isNaN(), .isBoolean(),
// and many others. Almost all the assertions in the hai library
// have their negative counterpart - e.g. .isNotBoolean(), ...

// Delete this line when you're ready for exercise 4 **/
