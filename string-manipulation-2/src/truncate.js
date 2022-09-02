/* exported truncate */

// create an empty string to concat to
// checks if string length is greater than length
// if that is not the case change length to string length
// if it is the case, use a for loop that goes from 0 to length
// concat each letter to the empty string
// at the end for both cases concat '...' and return

function truncate(length, string) {
  var emptyStr = '';
  if (string.length < length) {
    length = string.length;
  }
  for (var i = 0; i < length; i++) {
    emptyStr += string[i];
  }
  emptyStr += '...';
  return emptyStr;
}
