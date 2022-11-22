const eqArrays = function(array1, array2) {

  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }

  return true;

};

module.exports = eqArrays;