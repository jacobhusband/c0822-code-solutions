const takeAChance = require('./take-a-chance');

const promVar = takeAChance('Jacob').then(
  val => {
    console.log(val);
  },
  val => {
    console.log(val.message);
  }
);
