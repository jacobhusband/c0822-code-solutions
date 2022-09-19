/* exported student */

var student = {
  firstName: 'Jacob',
  lastName: 'Husband',
  subject: 'JavaScript',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

student.getIntroduction = function () {
  var str =
    'Hello, my name is ' +
    this.firstName +
    ' ' +
    this.lastName +
    ' and I am studying ' +
    this.subject +
    '.';
  return str;
};
