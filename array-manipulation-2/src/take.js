/* exported take */

// make a storage
// check if count is larger than array length
// if so make count equal to array length
// push each input array item from 0 to count to the storage
// return the storage

function take(arr, count) {
  var output = [];
  if (arr.length < count) {
    count = arr.length;
  }
  for (var i = 0; i < count; i++) {
    output.push(arr[i]);
  }
  return output;
}
