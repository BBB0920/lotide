const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

let array = [1, 2, 3];
console.log(middle(array)); 
console.log(middle([]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6, 7 ])); // => [4]

assertArraysEqual((middle(array)), [2]);