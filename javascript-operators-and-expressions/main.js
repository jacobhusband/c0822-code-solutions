var width, height;

var bill = 20;
var payment = 25;

var quizzes = 68;
var midterm = 81;
var final = 77;

var firstName = 'Jacob';
var lastName = 'Husband';

var pH = 8.12;

var headCount = 12;

width = 3;
height = 2;

var area = width * height;

console.log('value of area: ', area);
console.log('typeof area: ', typeof area);

var change = payment - bill;

console.log('value of change: ', change);
console.log('typeof change: ', typeof change);

var grade = (quizzes + midterm + final) / 3;

console.log('value of grade: ', grade);
console.log('typeof grade: ', typeof grade);

var fullName = firstName + ' ' + lastName;

console.log('value of fullName: ', fullName);
console.log('typeof fullName: ', typeof fullName);

var isAcidic = pH < 7;

console.log('value of isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', typeof isAcidic);

var isSparta = headCount === 300;

console.log('value of isSparta: ', isSparta);
console.log('typeof isSparta: ', typeof isSparta);

var motto = fullName;

motto += ' is the GOAT';

console.log('value of motto: ', motto);
console.log('typeof motto: ', typeof motto);
