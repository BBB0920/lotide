const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

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

    console.log(object1[i], object2[i]);
    
    if (Array.isArray(object1[i]) === true && Array.isArray(object2[i]) === true) {
      console.log(object1[i], object2[i]);
      return eqArrays(object1[i], object2[i]);
    }
    if (i !== Object.keys(object2)[j]) {
      return false;
    }
    j++;
  }
  return true;
};

module.exports = eqObjects;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), false); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// assertEqual(eqObjects(ab, ab), true); // => true

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
//assertEqual(eqObjects(cd, dc), false); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

const cd3 = { c: "1", d: ["2", 3, 5] };
assertEqual(eqObjects(cd2, cd3), false); 