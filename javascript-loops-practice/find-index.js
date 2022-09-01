/* exported findIndex */

// pass each value from array into code
// check array items if they are strictly equal to the value
// if there is a match return the current index
// if there is not a match return -1

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
