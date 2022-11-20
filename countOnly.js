const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } 
  console.log(results);
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// const countOnly = function(array, object) {
  
//   let newObject = {};

//   for (let char of array) {
//     if(!newObject[char]){
//       newObject[char] = 1;
//     } else {
//       newObject[char]++;
//     }
//   }
 
//   let newObject2 = {};

//   for (let char2 in object) {

//     if(object[char2] === true && newObject[char2] > 0) {
//       newObject2[char2] = newObject[char2];
//     }

//   }
//   console.log(newObject2);
// }

// let testArray = ['a', 'a', 'b', 'c', 'd', 'e', 'a'];
// let testObject = {
//   a: true, 
//   d: true, 
//   b: false, 
//   f: true
// };
// countOnly(testArray, testObject);