/* exported filterOutStrings */

// make a storage to hold values
// check values one at a time testing if they are not string type
// add them to the storage
// return the storage

function filterOutStrings(values) {
  var arr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      arr.push(values[i]);
    }
  }
  return arr;
}
