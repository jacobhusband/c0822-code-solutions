/* exported toObject */

// first argument is key and second argument is value
// create empty object to store output
// at the passed in key, assign the value passed in and store that in the empty object
// return the object

function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
