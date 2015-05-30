var anagram = function(input) {
  var Thingy = function(input) {
    this.input = input;
  }

  Thingy.prototype = {
    matches: function(words) {
      if (typeof words === 'string') {
        words = [words];
        for(var property in arguments) {
          words.push(arguments[property]);
        }
      }

      var anagrams = [];
      var sortedInput = this.sortAndLowerCaseWord(input);

      for(i = 0; i < words.length; i++) {
        var word = words[i];
        if (sortedInput.length === word.length && !this.isSameWord(input, word)) {
          var sortedWord = this.sortAndLowerCaseWord(word);
          if (sortedInput === sortedWord) {
            anagrams.push(word);
          }
        }
      }

      return anagrams;
    },

    sortAndLowerCaseWord: function(word) {
      return word.toLowerCase().split("").sort().join("");
    },

    isSameWord: function(left, right) {
      return left.toLowerCase() === right.toLowerCase();
    }
  }

  return new Thingy(input);
};

module.exports = anagram;
