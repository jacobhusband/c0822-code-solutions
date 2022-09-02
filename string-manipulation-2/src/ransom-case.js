/* exported ransomCase */

// make an empty string to concat to
// pass through each letter of the input string
// if the index % 2 = 1 make it upper case
// else make it lower case
// concat letters to empty str and return it

function ransomCase(str) {
  var output = str[0].toLowerCase();
  for (var i = 1; i < str.length; i++) {
    if (i % 2 === 1) {
      output += str[i].toUpperCase();
    } else {
      output += str[i].toLowerCase();
    }
  }
  return output;
}
