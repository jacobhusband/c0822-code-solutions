/* exported chunk */

// make a storage
// make a temp storage that holds that first value of the array
// if the index mod size is 0 then it is time to push the temp storage and make a new one
// if we get to the last index it is time to push the temp array

function chunk(arr, size) {
  var output = [];
  var temp = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % size === 0 && i !== 0) {
      output.push(temp);
      temp = [];
    }
    temp.push(arr[i]);
  }
  if (temp.length) {
    output.push(temp);
  }
  return output;
}
