/* exported dropRight */

// make a storage
// if count is larger than arr.length, return shallow copy of array
// if not start at index 0 and add items to storage until less than length of array minus count
// return storage

function dropRight(arr, count) {
  if (arr.length > count) {
    var output = [];
    var i = 0;
    for (; i < arr.length - count; i++) {
      output.push(arr[i]);
    }
    return output;
  } else {
    return [...arr];
  }
}
