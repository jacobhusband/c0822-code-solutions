/* exported intersection */

// add an empty array for storage
// check if each item from arr1 is strictly equal to each item from arr2
// if they are equal, push the value to storage array
// return storage array

function intersection(arr1, arr2) {
  var output = [];

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output.push(arr1[i]);
        break;
      }
    }
  }
  return output;
}
