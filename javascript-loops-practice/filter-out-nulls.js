/* exported filterOutNulls */

// create an empty array for storage
// take in values from the input
// check each value if it is strictly not equal to null
// if it is strictly not equal to null, add it to the empty array
// return the modified input after checking each value

function filterOutNulls(values) {
  var arr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      arr.push(values[i]);
    }
  }
  return arr;
}
