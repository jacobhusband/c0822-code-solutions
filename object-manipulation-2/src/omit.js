/* exported omit */

// make an empty obj for storage
// use a for-in loop with the source input
// use a for loop to check if the keys are a key in the source
// if the key is none of the keys in the source then add it
// if the key is a one of the keys in the source, do nothing
// return the storage object

function omit(source, keys) {
  var obj = {};
  var add = true;
  var i = 0;
  for (var key in source) {
    add = true;
    for (i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        add = false;
      }
    }
    if (add === true) {
      obj[key] = source[key];
    }
  }
  return obj;
}
