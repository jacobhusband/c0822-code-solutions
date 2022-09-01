/* exported reverse */

// make an empty array for storage
// start counting from the last item down to the first
// add each item to the empty array
// return old empty array as output

function reverse(arr) {
  if (arr.length) {
    var emptyArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      emptyArr.push(arr[i]);
    }
    return emptyArr;
  } else {
    return [];
  }
}
