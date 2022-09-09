var lotrSeries = [
  {
    isbn: '9780007136599',
    title: 'The Fellowship of the Ring',
    author: 'J. R. R. Tolkien'
  },
  {
    isbn: '9780007203598',
    title: 'The Two Towers',
    author: 'J. R. R. Tolkien'
  },
  {
    isbn: '9788435002790',
    title: 'The Return of the King',
    author: 'J. R. R. Tolkien'
  }
];

console.log('Lord of the Rings Books: ', lotrSeries);
console.log('Type of lotrSeries array: ', typeof lotrSeries);

var jsonLotrSeries = JSON.stringify(lotrSeries);

console.log('JSON.stringify lotrSeries array: ', jsonLotrSeries);
console.log('Type of JSON.stringify lotrSeries array: ', typeof jsonLotrSeries);

var jsonStringStudent = '{"id":32,"name":"Frodo"}';

console.log('jsonStringStudent: ', jsonStringStudent);
console.log('Type of jsonStringStudent: ', typeof jsonStringStudent);

var student = JSON.parse(jsonStringStudent);

console.log('parsed student object: ', student);
console.log('Type of parsed student object: ', typeof student);
