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

module.exports = middle;
