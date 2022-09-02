/* exported invert */

// make an empty obj for storage
// use a for in loop of the source to get key value pairs
// save them in the empty obj but in reverse order
// return storage obj

function invert(source) {
  var output = {};
  for (var key in source) {
    output[source[key]] = key;
  }
  return output;
}
