const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};
  /*
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual("Lighthouse Labs", "lighthouse labs");
  assertEqual(1, "1");
*/
const head = function(array) {
  if (array[0] === false) {
    return console.log(undefined);
  } else {
    return console.log(array[0]);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
head([5,6,7]);
head([]);