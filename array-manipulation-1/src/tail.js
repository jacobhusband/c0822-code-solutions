/* exported tail */

// make an empty storage
// check if the input has a length greater than 1
// if it does start at the second index and count to the end adding the items to the storage
// if the length is 1 or less, return an empty array

function tail(arr) {
  var emptyArr = [];
  if (arr.length > 1) {
    for (var i = 1; i < arr.length; i++) {
      emptyArr.push(arr[i]);
    }
    return emptyArr;
  } else {
    return [];
  }
}
