const remove = userKey => {
  const fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    data = JSON.parse(data);
    const arr = [];
    const obj = {};
    for (const key in data.notes) {
      if (userKey !== key) {
        arr.push(data.notes[key]);
      }
    }
    arr.forEach((item, ind) => {
      obj[ind + 1] = item;
    });
    data.notes = obj;
    data.nextId--;
    data = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', data, 'utf8', err => {
      if (err) throw err;
    });
  });
};

module.exports = remove;
