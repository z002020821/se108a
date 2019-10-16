const assert = require('assert')
const _ = require('./lodash')

/*
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]
*/

describe('lodash', function() {
  describe('drop', function() {
    it("_.drop([1, 2, 3], 2) equalTo [ 3 ]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 2), [3])
    });
    it("_.drop([1, 2, 3], 5) equalTo [ ]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 5), [])
    });
    it("_.drop([1, 2, 3], 0) equalTo [1, 2, 3]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 0), [1, 2, 3])
    });
  });
});

/*
_.dropRight([1, 2, 3]);
// => [1, 2]
 
_.dropRight([1, 2, 3], 2);
// => [1]
 
_.dropRight([1, 2, 3], 5);
// => []
 
_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
*/

describe('lodash', function() {
    describe('dropRight', function() {
      it("_.dropRight([1, 2, 3], 2) equalTo [ 1 ]", function() {
        assert.deepStrictEqual(_.dropRight([1, 2, 3], 2), [1])
      });
      it("_.dropRight([1, 2, 3], 5) equalTo [ ]", function() {
        assert.deepStrictEqual(_.dropRight([1, 2, 3], 5), [])
      });
      it("_.dropRight([1, 2, 3], 0) equalTo [1, 2, 3]", function() {
        assert.deepStrictEqual(_.dropRight([1, 2, 3], 0), [1, 2, 3])
      });
    });
  });
  
