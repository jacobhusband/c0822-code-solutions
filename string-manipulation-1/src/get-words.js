/* exported getWords */

// create an array the is equal to the string when it is split up at each space
// if no words are given return an empty array

function getWords(string) {
  if (string.length) {
    return string.split(' ');
  } else {
    return [];
  }
}
