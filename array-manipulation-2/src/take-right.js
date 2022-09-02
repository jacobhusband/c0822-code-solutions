/* exported takeRight */

// make a storage
// starting from length of array - count push values until length of array - 1
// if the count is larger than the length of the array
// return a shallow copy of that array

function takeRight(arr, count) {
  if (arr.length > count) {
    var output = [];
    for (var i = arr.length - count; i < arr.length; i++) {
      output.push(arr[i]);
    }
    return output;
  } else {
    return [...arr];
  }
}
