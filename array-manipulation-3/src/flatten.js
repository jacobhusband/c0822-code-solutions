/* exported flatten */

// make a storage array
// check if the item in the array is also an array
// if it is grab each item in that array and push to storage
// if the item in the input array is not an array then push it to storage

function flatten(arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      output.push(arr[i]);
    } else {
      for (var j = 0; j < arr[i].length; j++) {
        output.push(arr[i][j]);
      }
    }
  }
  return output;
}
