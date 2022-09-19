function ExampleConstructor() {}

console.log('ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log(
  'typeof ExampleConstructor.prototype: ',
  typeof ExampleConstructor.prototype
);

var exampleConstructor = new ExampleConstructor();

console.log('exampleConstructor: ', exampleConstructor);
console.log(
  'exampleConstructor instanceof ExampleConstructor: ',
  exampleConstructor instanceof ExampleConstructor
);
