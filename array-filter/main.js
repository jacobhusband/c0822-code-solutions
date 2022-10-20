const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(el => !(el % 2));
const overFive = numbers.filter(el => el > 5);
const startWithE = names.filter(el => el[0] === 'E');
const haveD = names.filter(el => el.includes('d') || el.includes('D'));

const checkFilter = filter(numbers, el => !(el % 2));

function filter(array, cb) {
  const output = [];
  array.forEach(item => {
    if (cb(item)) {
      output.push(item);
    }
  });
  return output;
}
