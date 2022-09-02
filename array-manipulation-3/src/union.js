/* exported union */

// make an output array with the first array
// compare the first item of the second array to each item in the first array
// if it is not the same add it to the array
// if it is the same skip it
// do that with all values
// return the output array

function union(arr1, arr2) {
  var output = [...arr1];
  var addItem;

  for (var i = 0; i < arr2.length; i++) {
    addItem = true;
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        addItem = false;
        break;
      }
    }
    if (addItem) {
      output.push(arr2[i]);
    }
  }
  return output;
}
