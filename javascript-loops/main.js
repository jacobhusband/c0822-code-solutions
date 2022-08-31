/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            doubleAll,
            getKeys,
            getValues
            */

var obj1 = {
  name: 'objector',
  weight: 105,
  units: 'english imperial'
};

var obj2 = {
  name: 'injector',
  weight: 42,
  units: 'metric'
};

console.log('getNumbersToTen: ', getNumbersToTen());
console.log('getNumbersToTwenty: ', getNumbersToTwenty());
console.log('repeatWord("hey", 3): ', repeatWord('hey', 3));
console.log('logEachCharacter(\'\')', logEachCharacter(''));
console.log('logEachCharacter(\'hey\')', logEachCharacter('hey'));
console.log(
  'logEachCharacter(\'what is wrong?\')',
  logEachCharacter('what is wrong?')
);
console.log('doubleAll([1,2,3])', doubleAll([1, 2, 3]));
console.log('doubleAll([4,5,6])', doubleAll([4, 5, 6]));
console.log('getKeys(obj1)', getKeys(obj1));
console.log('getKeys(obj2)', getKeys(obj2));
console.log('getValues(obj1))', getValues(obj1));
console.log('getValues(obj2))', getValues(obj2));

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(str) {
  for (var i = 0; i < str.length; i++) {
    console.log('str[i]: ', str[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
