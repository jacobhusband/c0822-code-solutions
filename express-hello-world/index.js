const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.send('Hello');
  next();
});

app.listen(3000, () => {});
