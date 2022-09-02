/* exported getValues */

// create an empty array for storage
// use a for loop to get the keys from the object
// use the object at each key to get the values
// push those values into the arr and return it

function getValues(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}
