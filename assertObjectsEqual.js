const eqArrays = function(array1, array2) {

  for (let x = 0; x < array1.length; x++) {
    if (array1.length !== array2.length){
      return false;
    }
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  let j = 0; 

  for(i of Object.keys(object1)) {
    if (Array.isArray(object1[i]) === true && Array.isArray(object2[i]) === true) {
      return eqArrays(object1[i], object2[i]);
    }
    if (i !== Object.keys(object2)[j]) {
      return false;
    }
    j++;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!

  const inspect = require('util').inspect;

  if(eqObjects(actual,expected) === true) {
    return console.log(`✅✅✅ Object Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑 Object Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

assertObjectsEqual(ab, ab); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

const cd3 = { c: "1", d: ["2", 3, 5] };
assertObjectsEqual(cd2, cd3); 

module.exports = assertObjectsEqual;