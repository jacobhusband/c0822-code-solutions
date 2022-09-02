/* exported equal */

// check if the first item of array 1 is strictly equal to the first
// item of array 2
// do that for every item
// if all items are the same return true
// if any item is not the same return false

function equal(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
