var Hamming = function() {};

Hamming.prototype.compute = function(left, right) {
  if (left.length != right.length) {
    throw new Error('DNA strands must be of equal length.')
  }

  var distance = 0;
  for (i = 0; i < left.length; i++) {
    if (left[i] != right[i]) {
      distance += 1;
    }
  }
  return distance;
};

module.exports = new Hamming;
