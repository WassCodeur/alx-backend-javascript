const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('CalculateNumber', function() {
  it('should returns 4 for inputs (1, 3)', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  })
  it('should returns 5 for inputs (1, 3.7)', function() {
	  assert.strictEqual(calculateNumber(1, 3.7), 5);
  })
  it('should returns 5 for inputs (1.2, 3.7)', function() {
         assert.strictEqual(calculateNumber(1.2, 3.7), 5);
})
it('should returns 6 for inputs (1.5, 3.7)', function() {
     assert.strictEqual(calculateNumber(1.5, 3.7), 6);
})
})

