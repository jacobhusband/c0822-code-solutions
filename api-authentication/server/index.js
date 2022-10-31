require('dotenv/config');
const pg = require('pg');
const argon2 = require("argon2"); // eslint-disable-line
const express = require('express');
const jwt = require("jsonwebtoken"); // eslint-disable-line
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
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
        insert into "users" ("username", "hashedPassword")
        values ($1, $2)
        returning "userId", "username", "createdAt"
      `;
      const params = [username, hashedPassword];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.post('/api/auth/sign-in', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }

  /* your code starts here */
  const sql = `
    select "userId", "username", "hashedPassword"
    from "users"
    where "username" = $1;
  `;

  const params = [username];

  let results;

  db.query(sql, params)
    .then(result => {
      results = result.rows[0];
      return results.hashedPassword;
    })
    .then(hashedPassword => {
      return argon2.verify(hashedPassword, password);
    })
    .then(isMatching => {
      if (!isMatching) {
        throw new ClientError(401, 'invalid login');
      } else {
        delete results.hashedPassword;
        const token = jwt.sign(results, process.env.TOKEN_SECRET);
        const responseObject = {
          token,
          payload: results
        };
        res.status(200).json(responseObject);
      }
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
