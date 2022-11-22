const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns empty array when array has no element", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns empty array when array has one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns empty array when array has two elements", () => {
    assert.deepEqual(middle([1,2]), []);
  });
  it("returns middle element when array has three elements", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns two middle elements when array has even number of elements greater than 2", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns middle element when array has an odd number of elements greater than 1", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
});