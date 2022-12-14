const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArraysEqual = function(array1, array2) {
  assertEqual(eqArrays(array1, array2), true);
};

module.exports = assertArraysEqual;

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

// const eqArrays = function(array1, array2) {

//   for (let x = 0; x < array1.length; x++) {
//     if (array1[x] !== array2[x]) {
//       return false;
//     }
//   }

//   return true;

// };

// const assertArraysEqual = function(result) {

//   if (result === true) {
//     return console.log(`✅✅✅ Array Assertion Passed: ${result} === true`);
//   } else {
//     return console.log(`🛑🛑🛑 Array Assertion failed: ${result} !== true`);
//   }
// };

// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false