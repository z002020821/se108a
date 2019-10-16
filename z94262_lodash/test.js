const assert = require('assert')
const _ = require('./index')

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
  
  describe('lodash', function() {
    describe('tail', function() {
      it("_.tail([1, 2, 3]) equalTo [ 2, 3 ]", function() {
        assert.deepStrictEqual(_.tail([1, 2, 3]), [2, 3])
      });
    });
  });

  describe('lodash', function() {
    describe('sum', function() {
      it("_.sum([4, 2, 8, 6]) equalTo 20 ", function() {
        assert.deepStrictEqual(_.sum([4, 2, 8, 6]), 20)
      });
    });
  });