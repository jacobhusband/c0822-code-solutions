const create = str => {
  const fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    data.notes[data.nextId] = str;
    data.nextId++;
    data = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', data, 'utf8', err => {
      if (err) throw err;
    });
  });
};

module.exports = create;
