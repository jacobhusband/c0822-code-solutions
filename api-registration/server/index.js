require('dotenv/config');
const pg = require('pg');
const argon2 = require("argon2"); // eslint-disable-line
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({
  // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }

  /* your code starts here */
  let hashedPassword;
  argon2
    .hash(password)
    .then(response => {
      hashedPassword = response;
      const sql = `
        insert into "users" ("username", "hashedPassword")
        values ($1, $2)
        returning *
      `;

      const params = [username, hashedPassword];

      db.query(sql, params)
        .then(result => {
          delete result.rows[0].hashedPassword;
          res.status(201).json(result.rows[0]);
          return result.rows;
        })
        .catch(err => console.error(err));
    })
    .catch(err => {
      console.error(err);
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
