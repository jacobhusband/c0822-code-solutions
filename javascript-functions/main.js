var minutes = 7;
var name = 'Jacob';
var width = 8;
var height = 9;
var person = {
  firstName: 'Jacob',
  lastName: 'Husband'
};
var array = [1, 2, 3, 4, 5, 6];

function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return `Hey, ${name}`;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(
  `convertMinutesToSeconds(${minutes}): `,
  convertMinutesToSeconds(minutes)
);
console.log(`greet(${name}): `, greet(name));
console.log(`getArea(${width}, ${height}): `, getArea(width, height));
console.log('getFirstName(person): ', getFirstName(person));
console.log(`getLastElement(${array}): `, getLastElement(array));
