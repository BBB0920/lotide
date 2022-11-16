const eqArrays = function(array1, array2) {

  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }

  return true;

};

const assertArraysEqual = function(result) {
  if (result === true) {
    return console.log(`✅✅✅ Array Assertion Passed: ${result} === true`);
  } else {
    return console.log(`🛑🛑🛑 Array Assertion failed: ${result} !== true`);
  }
};

const without = function(source, itemsToRemove) {

  let newArray = source;
  
  for (let x = 0; x < newArray.length; x++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (newArray[x] === itemsToRemove[y]) {
        newArray.splice(x, 1);
      } else {
        y++;
      }
    }
  }
  return console.log(newArray);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(eqArrays(words, ["hello", "world", "lighthouse"]));