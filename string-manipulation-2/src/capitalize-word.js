/* exported capitalizeWord */

// make an empty string to concat to
// go through each letter in the input
// make the first one uppercase
// make all the rest lowercase
// concat each letter after it is modified
// return the old empty string
// if the word javascript is found make it the correct capitalization

function capitalizeWord(str) {
  var empStr = str[0].toUpperCase();
  for (var i = 1; i < str.length; i++) {
    empStr += str[i].toLowerCase();
  }
  if (empStr === 'Javascript') {
    empStr = 'JavaScript';
  }
  return empStr;
}
