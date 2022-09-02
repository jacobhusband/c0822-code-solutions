/* exported difference */

// make an empty storage array
// compare each item in the first array to items in the second
// if the item is not strictly equal to each of the other items, push it to storage
// if they are strictly equal, remove the index from the second array
// after all the items from the first array has been added
// add the remaining items from the second array

function difference(arr1, arr2) {
  var output = [];
  var addItem;
  var arr2Shallow = [...arr2];

  for (var i = 0; i < arr1.length; i++) {
    addItem = true;
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        addItem = false;
        arr2Shallow.splice(j, 1);
        break;
      }
    }
    if (addItem) {
      output.push(arr1[i]);
    }
  }
  for (var k = 0; k < arr2Shallow.length; k++) {
    output.push(arr2Shallow[k]);
  }
  return output;
}
