const assertArraysEqual = function(array1, array2) {

  let result = true;

  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      result = false;
    }
  }

  if (result === true) {
    return console.log(`✅✅✅ Array Assertion Passed: ${result} === true`);
  } else {
    return console.log(`🛑🛑🛑 Array Assertion failed: ${result} !== true`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(words, word => word.length);
console.log(results2);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word[word.length-1]);
console.log(results3);
assertArraysEqual(results3, ['d', 'l', 'o', 'r', 'm']);
