const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const id in grades) {
    arr.push(grades[id]);
  }
  res.json(arr);
});

app.delete('/api/grades/:id', (req, res, next) => {
  const len = Object.keys(grades).length;
  delete grades[req.params.id];
  if (Object.keys(grades).length !== len) {
    res.sendStatus(204);
  } else {
    res.send('Invalid id');
  }
  next();
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is ready for lift off!');
});
