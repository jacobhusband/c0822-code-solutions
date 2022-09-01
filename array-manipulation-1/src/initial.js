/* exported initial */

// make an empty storage
// check if the input has a length greater than 1
// if it does start at the first index and add items until 1 before the last item
// if the length is 1 or less, return an empty array

function initial(arr) {
  var emptyArr = [];
  if (arr.length > 1) {
    for (var i = 0; i < arr.length - 1; i++) {
      emptyArr.push(arr[i]);
    }
    return emptyArr;
  } else {
    return [];
  }
}
