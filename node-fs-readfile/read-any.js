const fs = require('fs');
const fileName = process.argv[2];
console.log(fileName);

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
