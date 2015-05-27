var words = function(input) {
  input = input.replace(/\n|\t/, ' ');
  var wordsToCount = {};
  var words = input.split(/\s+/);

  for(i = 0; i < words.length; i++) {
    var word = words[i];
    if (wordsToCount[word] === undefined || isNaN(parseInt(wordsToCount[word]))) {
      wordsToCount[word] = 1;
    }
    else {
      wordsToCount[word] += 1;
    }
  }
  return wordsToCount;
}

module.exports = words;
