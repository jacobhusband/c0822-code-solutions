/* exported isPalindromic */

// if the string has a space remove it
// make an empty string for storage
// add letters starting from the end of the string to the beginning to the storage string
// at the end compare the two string and if they are strictly equal return true else false

function isPalindromic(str) {
  var test = '';
  str = str.split(' ').join('');
  for (var i = str.length - 1; i >= 0; i--) {
    test += str[i];
  }
  if (test === str) {
    return true;
  } else {
    return false;
  }
}
