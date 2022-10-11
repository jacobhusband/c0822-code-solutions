const add = require('./add');
const divide = require('./divide');
const multiply = require('./multiply');
const subtract = require('./subtract');

const args = process.argv.slice(2).map((x, i) => {
  if (i !== 1) {
    return parseInt(x);
  } else {
    return x;
  }
});
const resultStr = 'result: ';

if (args[1] === 'plus') {
  console.log(resultStr, add(args[0], args[2]));
} else if (args[1] === 'times') {
  console.log(resultStr, multiply(args[0], args[2]));
} else if (args[1] === 'minus') {
  console.log(resultStr, subtract(args[0], args[2]));
} else if (args[1] === 'over') {
  console.log(resultStr, divide(args[0], args[2]));
} else {
  console.log('invalid entry');
}
