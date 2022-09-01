/* exported includesSeven */

// compare each array value to the number 7
// if it is ever strictly equal to 7, return true
// otherwise return false

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) return true;
  }
  return false;
}
