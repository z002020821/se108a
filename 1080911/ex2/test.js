const assert = require('assert')
const _ = require('./lodash')

/*
_.tail([1, 2, 3]);
 => [2, 3]
*/

describe('lodash', function() {
  describe('tail', function() {
    it("_.tail([1, 2, 3]) equalTo [ 2, 3 ]", function() {
      assert.deepStrictEqual(_.tail([1, 2, 3]), [2, 3])
    });
  });
});

