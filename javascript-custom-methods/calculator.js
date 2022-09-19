/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    return numbers.reduce((x, y) => x + y, 0);
  },
  getAverage: function (numbers) {
    return numbers.reduce((x, y) => x + y, 0) / numbers.length;
  }
};
