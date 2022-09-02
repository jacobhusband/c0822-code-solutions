/* exported swapChars */

// make an empty string to concat to
// go through each letter of the string input
// make an if statement that checks if we are at first index
// if so concat the secondindex letter
// make an if statement that checks if we are at second index
// if so concat the firstindex letter
// return the string

function swapChars(i1, i2, str) {
  var output = '';
  for (var i = 0; i < str.length; i++) {
    if (i === i1) {
      output += str[i2];
    } else if (i === i2) {
      output += str[i1];
    } else {
      output += str[i];
    }
  }
  return output;
}
