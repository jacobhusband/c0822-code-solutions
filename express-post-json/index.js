const express = require('express');
const app = express();
const middleware = express.json();

let nextId = 1;
const grades = {};

app.use(middleware);

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const id in grades) {
    arr.push(grades[id]);
  }
  res.json(arr);
});

app.post('/api/grades', (req, res) => {
  const obj = req.body;
  obj.id = nextId;
  grades[nextId] = obj;
  nextId++;
  res.status(201);
  res.json(obj);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is ready for lift off!');
});
