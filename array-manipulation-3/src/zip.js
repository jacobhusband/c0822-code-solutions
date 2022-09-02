/* exported zip */

// make an output array for storage
// check which of the two input arrays are shorter
// splice off items at the end of the longer array
// take the first index from each array and put them in a temp array
// push that temp array to the output array
// return the output array

function zip(arr1, arr2) {
  var output = [];

  if (arr1.length !== arr2.length) {
    var smallerLength = Math.min(arr1.length, arr2.length);
    if (arr1.length !== smallerLength) {
      arr1 = shaveArray(arr1, smallerLength);
    } else {
      arr2 = shaveArray(arr2, smallerLength);
    }
  }

  function shaveArray(array, length) {
    var output = [];
    for (var i = 0; i < length; i++) {
      output.push(array[i]);
    }
    return output;
  }

  for (var i = 0; i < arr1.length; i++) {
    output.push([arr1[i], arr2[i]]);
  }

  return output;
}
