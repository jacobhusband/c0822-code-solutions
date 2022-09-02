/* exported compact */

// make an empty array for storage
// go through each input and check if they a 'truthy'
// if they are add it to the empty array and return that as output at the end

function compact(arr) {
  var truthyArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyArr.push(arr[i]);
    }
  }
  return truthyArr;
}
