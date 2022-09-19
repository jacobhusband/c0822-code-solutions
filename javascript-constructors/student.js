/* exported Student */

function StudentPrototype() {
  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  this.getIntroduction = function () {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`;
  };
}

function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype = new StudentPrototype();
