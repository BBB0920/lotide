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

const takeUntil = function(array, callback) {
  
  let newArray = [];
  
  for (let i of array) {
    //callback(i) ? return newArray : newArray.push(i);
    //is there a way to use ternary operators to do this?
    
    if (callback(i) === true) {
      return newArray;
    }
    newArray.push(i);
  }

  // for(let i = 0; i < array.length; i++){
  //   if(callback(array[i] === true)) {
  //     return newArray;
  //   }
  //   newArray.push(array[i]);
  //console.log(newArray);
  //}
};

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
