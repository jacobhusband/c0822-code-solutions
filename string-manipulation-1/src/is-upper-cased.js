/* exported isUpperCased */

// take in each letter of a word
// make the upperCase version of that letter
// see if it is strictly equal to the current letter
// if it is not return false
// if all letters are strictly equal to the upperCase version return true

function isUpperCased(string) {
  var upperLetter;
  for (var i = 0; i < string.length; i++) {
    upperLetter = string[i].toUpperCase();
    if (upperLetter !== string[i]) {
      return false;
    }
  }
  return true;
}
