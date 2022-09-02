/* exported drop */

// make a storage
// check if count is larger than array length
// if so make count equal to array length
// push each input array item from count to end
// return the storage

function drop(arr, count) {
  if (arr.length < count) {
    count = arr.length;
  }
  var output = [];
  for (var i = count; i < arr.length; i++) {
    output.push(arr[i]);
  }
  return output;
}
