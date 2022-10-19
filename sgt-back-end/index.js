// const pg = require("pg");
const express = require('express');
const app = express();

// only create ONE pool for your whole server
// const db = new pg.Pool({
//   connectionString: "postgres://dev:dev@localhost/studentGradeTable",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

app.get('/api/grades', (req, res, next) => {});
