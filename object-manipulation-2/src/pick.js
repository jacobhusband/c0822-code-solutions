/* exported pick */

// make an empty obj for storage
// use a for-in loop with the source input
// use a for loop to check if the keys are a key in the source
// if they are, add them with their values to the empty obj
// if they are not do not do anything
// if the value of the source at key is undefined then dont add it by accident
// return the storage object

function pick(source, keys) {
  var obj = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key && source[key] !== undefined) {
        obj[key] = source[key];
      }
    }
  }
  return obj;
}
