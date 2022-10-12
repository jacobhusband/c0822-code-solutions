const update = (userKey, input) => {
  const fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    data = JSON.parse(data);
    for (var key in data.notes) {
      if (userKey === key) {
        data.notes[key] = input;
        break;
      }
    }
    data = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', data, 'utf8', err => {
      if (err) throw err;
    });
  });
};

module.exports = update;
