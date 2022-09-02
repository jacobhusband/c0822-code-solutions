/* exported capitalize */

// take the input and make it lowercase
// split up the string to make it easy to work with
// capitalize the first letter
// join the string
// return the string as output

function capitalize(string) {
  string = string.toLowerCase();
  var splitString = string.split('');
  splitString[0] = splitString[0].toUpperCase();
  return splitString.join('');
}
