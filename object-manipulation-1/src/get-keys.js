/* exported getKeys */

// create an empty array for storage
// take in an object and use a for in loop to get the keys out of the object
// add the keys to the storage and return it at the end

function getKeys(obj) {
  var emptyArr = [];
  for (var key in obj) {
    emptyArr.push(key);
  }
  return emptyArr;
}
