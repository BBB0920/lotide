const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  
  let str = string.replace(/\s+/g, '');
  let object = {};

  for(i of str) {
    !object[i] ? object[i] = 1 : object[i] += 1; 
  }
  return object;
}

let object1 = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}; 

// countLetters(' L H L ');
// countLetters("lighthouse in the house");
//console.log(object1 === countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house"), object1);