var Bob = function() {};

Bob.prototype = {
  hey: function(input) {
    if (/\d/.test(input)) {
      if (input.indexOf('!') > 0) {
        return 'Woah, chill out!';
      }
      else if (input.indexOf('?') > 0) {
        return 'Sure.';
      }
      else {
        return 'Whatever.';
      }
    }
    else {
      if (input.trim() === '') {
        return 'Fine. Be that way!';
      }
      else if (input.toUpperCase() === input) {
        return 'Woah, chill out!';
      }
      else if (input.indexOf('?') > 0 && input.indexOf('?') === input.length - 1) {
        return 'Sure.';
      }
      else {
        return 'Whatever.';
      }
    }
  }
}

module.exports = Bob;
