const fs = require('fs');
const message = process.argv[2] + '\n';

fs.writeFile('note.txt', message, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
