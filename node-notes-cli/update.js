const update = (userKey, input) => {
  const fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    data = JSON.parse(data);
    if (userKey in data.notes) {
      data.notes[userKey] = input;
      data = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', data, 'utf8', err => {
        if (err) throw err;
      });
    } else {
      console.log('This id does not exist!');
    }
  });
};

module.exports = update;
