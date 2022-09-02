/* exported unique */

// make an output array for storage
// check if each item in the input array is strictly equal
// to any of the items in the storage array
// if not, push it to the storage array
// if it is, break and go to next item

function unique(array) {
  var addItem;

  if (array.length !== 0) {
    var output = [array[0]];

    for (var i = 1; i < array.length; i++) {
      addItem = true;

      for (var j = 0; j < output.length; j++) {
        if (array[i] === output[j]) {
          addItem = false;
          break;
        }
      }

      if (addItem === true) {
        output.push(array[i]);
        addItem = false;
      }
    }
    return output;
  } else {
    return array;
  }
}
