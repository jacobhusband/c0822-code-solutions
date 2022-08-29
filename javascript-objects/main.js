var student = {
  firstName: 'Jacob',
  lastName: 'Husband',
  age: 24
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Technical Assistant';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Nissan',
  model: 'Versa',
  year: 2014
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log(`value of vehicle['color'] ${vehicle['color']}`);
console.log('value of vehicle[\'isConvertible\']', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Shasta',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet object: ', pet);
