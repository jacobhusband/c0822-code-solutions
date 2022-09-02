/* exported isLowerCased */

// take in each letter of a word
// make the lowerCase version of that letter
// see if it is strictly equal to the current letter
// if it is not return false
// if all letters are strictly equal to the upperCase version return true

function isLowerCased(string) {
  var lowerLetter;
  for (var i = 0; i < string.length; i++) {
    lowerLetter = string[i].toLowerCase();
    if (lowerLetter !== string[i]) {
      return false;
    }
  }
  return true;
}
