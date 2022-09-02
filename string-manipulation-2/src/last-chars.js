/* exported lastChars */

// check to see if string has length
// if not return empty string
// make empty string to concat to
// check to see if the length of the string is less than length
// if it is assign string.length to length
// go through each letter of the string, starting from the length of the string minus the length argument, and concat to empty str
// return old empty string

function lastChars(len, str) {
  var output = '';
  if (str.length < len) {
    len = str.length;
  }
  for (var i = str.length - len; i < str.length; i++) {
    output += str[i];
  }
  return output;
}
