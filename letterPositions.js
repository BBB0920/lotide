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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      !results[sentence[i]] ? results[sentence[i]] = [i] : results[sentence[i]].push(i);
    }
  }
  return results;
};

letterPositions("hello");
letterPositions("lighthouse in the house");

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);

module.exports = letterPositions;