/* exported zip */

// make an output array for storage
// check which of the two input arrays are shorter
// splice off items at the end of the longer array
// take the first index from each array and put them in a temp array
// push that temp array to the output array
// return the output array

function zip(arr1, arr2) {
  var output = [];
  var smallerLength = Math.min(arr1.length, arr2.length);

  for (var i = 0; i < smallerLength; i++) {
    output.push([arr1[i], arr2[i]]);
  }

  return output;
}
