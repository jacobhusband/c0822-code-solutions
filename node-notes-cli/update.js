const update = (userKey, input) => {
  const fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    data = JSON.parse(data);
    if (parseInt(userKey) < parseInt(data.nextId)) {
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
    } else {
      console.log(
        'This id has never existed, choose an id that has existed or create a new entry!'
      );
    }
  });
};

module.exports = update;
