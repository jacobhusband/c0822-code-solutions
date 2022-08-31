/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// var shia = {
//   name: "Shia Lebouf",
//   age: 34,
// };

// var bart = {
//   name: "Bartholomew JoJo Simpson",
//   age: 10,
// };

// console.log(`isUnderFive(${bart.age})`, isUnderFive(bart.age));
// console.log(`isUnderFive(${shia.age})`, isUnderFive(shia.age));
// console.log(`isEven(2)`, isEven(2));
// console.log(`isEven(3)`, isEven(3));
// console.log(`startsWithJ('Jake')`, startsWithJ("Jake"));
// console.log(`startsWithJ('Kake')`, startsWithJ("Kake"));
// console.log(`isOldEnoughToDrink(${bart.age})`, isOldEnoughToDrink(bart));
// console.log(`isOldEnoughToDrink(${shia.age})`, isOldEnoughToDrink(shia));
// console.log(`isOldEnoughToDrive(${bart.age})`, isOldEnoughToDrive(bart));
// console.log(`isOldEnoughToDrive(${shia.age})`, isOldEnoughToDrive(shia));
// console.log(
//   `isOldEnoughToDrinkAndDrive(${bart.age})`,
//   isOldEnoughToDrinkAndDrive(bart.age)
// );
// console.log(
//   `isOldEnoughToDrinkAndDrive(${shia.age})`,
//   isOldEnoughToDrinkAndDrive(shia.age)
// );
// console.log(`categorizeAcidity(7)`, categorizeAcidity(7));
// console.log(`categorizeAcidity(14)`, categorizeAcidity(14));
// console.log(`categorizeAcidity(0)`, categorizeAcidity(0));
// console.log(`categorizeAcidity(3)`, categorizeAcidity(3));
// console.log(`categorizeAcidity(9)`, categorizeAcidity(9));
// console.log(`introduceWarnerBro('wakko')`, introduceWarnerBro("wakko"));
// console.log(`introduceWarnerBro('yakko')`, introduceWarnerBro("yakko"));
// console.log(`introduceWarnerBro('dot')`, introduceWarnerBro("dot"));
// console.log(`introduceWarnerBro('man')`, introduceWarnerBro("man"));

function isUnderFive(age) {
  if (age < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(str) {
  if (str[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age > 20) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age > 15) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'basic';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'wakko' || name === 'yakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
