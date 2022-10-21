const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function map(array, transform) {
  const output = [];
  for (var i = 0; i < array.length; i++) {
    output.push(transform(array[i]));
  }
  return output;
}

const doubledWithFunc = map(numbers, x => x * 2);
