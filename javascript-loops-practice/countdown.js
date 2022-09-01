/* exported countdown */

// make an empty array
// start at the input value - 1
// add the input value to the empty array
// reduce the input value by 1
// repeat previous two steps until 0 is pushed on the array

function countdown(number) {
  var arr = [number];
  for (var i = number - 1; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}
