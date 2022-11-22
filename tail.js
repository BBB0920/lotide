const tail = function(array) {
  return array.slice(array.length - (array.length - 1));
};

module.exports = tail;