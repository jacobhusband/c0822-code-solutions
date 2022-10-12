const read = () => {
  const fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    data = JSON.parse(data);
    for (var key in data.notes) {
      console.log(`${key}: ${data.notes[key]}`);
    }
  });
};

module.exports = read;
