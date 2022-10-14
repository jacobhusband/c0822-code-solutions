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
  if (typeof req.body === 'object') {
    const obj = req.body;
    obj.id = nextId;
    grades[nextId] = obj;
    nextId++;
    res.json(grades);
    res.status(201);
  } else {
    res.status(404);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is ready for lift off!');
});
