const fileName = 'random.txt';
const fs = require('fs');

const data = Math.floor(Math.random() * 8).toString() + '\n';

fs.writeFile(fileName, data, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
