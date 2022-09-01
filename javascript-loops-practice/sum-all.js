/* exported sumAll */

// create something to store the sum of values
// initialize it to 0
// go through each value passed in the array
// add it to the current value of the sum variable
// return sum variable after last index of array

function sumAll(arr) {
  var val = 0;
  for (var i = 0; i < arr.length; i++) {
    val += arr[i];
  }
  return val;
}
