var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);
console.log(`Maximum Value: (${num1}, ${num2}, ${num3})`, maximumValue);

var heroes = ['Batman', 'Superman', 'Spiderman', 'Antman'];
console.log(`Heroes: (${heroes[0]}, ${heroes[1]}, ${heroes[2]}, ${heroes[3]})`);

var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('Random Index: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Random Hero: ', randomHero);

var library = [
  {
    title: 'cat',
    author: 'Cat Man'
  },
  {
    title: 'dog',
    author: 'Dog Man'
  },
  {
    title: 'bird',
    author: 'Bird Man'
  }
];

var lastBook = library.pop();

console.log('lastBook: ', lastBook);

var firstBook = library.shift();

console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library: ', library);

var fullName = 'Jacob Husband';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
