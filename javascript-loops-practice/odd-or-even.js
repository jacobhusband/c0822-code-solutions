/* exported oddOrEven */

// make an empty array for storage
// iterate through each item in the array
// check if the item is even
// if it is push 'even' on the array
// if it is not push 'odd' on the array
// return array at the end

function oddOrEven(numbers) {
  var arr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      arr.push('odd');
    } else if (numbers[i] % 2 === 0) {
      arr.push('even');
    }
  }
  return arr;
}
