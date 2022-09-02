/* exported includes */

// compare each item in the input array to the value
// if any of them are strictly equal to each other return true
// return false at the end if not

function includes(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}
