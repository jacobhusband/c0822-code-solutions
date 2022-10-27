const express = require('express');
const path = require('path');

const app = express();

const route = path.join(__dirname, 'public');
const expStatic = express.static(route);

app.use(expStatic);

app.listen(3000, () => {
  console.log('Server is live!');
});
