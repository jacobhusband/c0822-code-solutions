/* exported getIndexes */

// create storage for indexes
// find the number of items given
// initialize a number to 0 for the first item since arrays begin at 0 index
// add the initialized number to the storage
// increment the number
// repeat previous 2 steps until number is 1 less than the length of the input

function getIndexes(arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    output.push(i);
  }
  return output;
}
