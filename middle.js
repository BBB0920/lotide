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

const middle = function(array) {
  
  let middleArray = [];

  if(array.length < 3) {
    return middleArray;
  } 
  else if(array.length % 2 === 0) {
    middleArray.push(array.length / 2);
    middleArray.push((array.length / 2) + 1);
    return middleArray;
  } 
  else if(array.length % 2 === 1) {
    middleArray.push(Math.ceil(array.length / 2));
    return middleArray;
  }
};

let array = [1, 2, 3];
//console.log(middle(array)); 
// middle([]);
// middle([1]);
// middle([1, 2]);
// middle([1, 2, 3]);
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// middle([1, 2, 3, 4, 5, 6, 7 ]) // => [4]

assertArraysEqual(eqArrays((middle(array)), [2]));
