/* exported reverseWord */

// make an empty string
// concat that string with letters from the input starting at the end and counting down
// return the now non-empty string as output

function reverseWord(string) {
  var output = '';
  for (var i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  return output;
}
