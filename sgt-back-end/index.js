const pg = require("pg");
const express = require("express");
const app = express();

//middleware for post
app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: "postgres://dev:dev@localhost/studentGradeTable",
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/api/grades", (req, res, next) => {
  const sql = `
    select * from "grades"
  `;

  db.query(sql)
    .then((result) => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: `An unexpected error occurred.`,
      });
    });
});

app.post("/api/grades", (req, res, next) => {
  if (
    Object.keys(req.body).length !== 3 ||
    !req.body.name ||
    !req.body.course ||
    !req.body.score
  ) {
    res.status(400).json({
      error: `Please supply a grades object with the parameters "name" as a string, "course" as a string, and "score" as a number.`,
    });
    return;
  } else if (
    typeof req.body.name !== "string" ||
    typeof req.body.course !== "string" ||
    isNaN(parseInt(req.body.score))
  ) {
    console.log(req.body);
    res.status(400).json({
      error: `Please supply a grades object with the parameters "name" as a string, "course" as a string, and "score" as a number.`,
    });
    return;
  }

  const query = {
    text: `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
  `,
    values: [req.body.name, req.body.course, req.body.score],
  };

  db.query(query)
    .then((result) => {
      res.status(200).json(result.rows[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: `An unexpected error has occurred.`,
      });
    });
});

app.put("/api/grades/:gradeId", (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: `"gradeId" must be a positive integer`,
    });
    return;
  }
  if (
    Object.keys(req.body).length !== 3 ||
    !req.body.name ||
    !req.body.course ||
    !req.body.score
  ) {
    res.status(400).json({
      error: `Please supply a grades object with the parameters "name" as a string, "course" as a string, and "score" as a number.`,
    });
    return;
  } else if (
    typeof req.body.name !== "string" ||
    typeof req.body.course !== "string" ||
    isNaN(parseInt(req.body.score))
  ) {
    console.log(req.body);
    res.status(400).json({
      error: `Please supply a grades object with the parameters "name" as a string, "course" as a string, and "score" as a number.`,
    });
    return;
  }

  const query = {
    text: `
      update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *
    `,
    values: [req.body.name, req.body.course, req.body.score, gradeId],
  };

  db.query(query)
    .then((result) => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `There was no entry associated with that id`,
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: `An unexpected error has occurred.`,
      });
    });
});

app.delete("/api/grades/:gradeId", (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: `"gradeId" must be a positive integer`,
    });
    return;
  }
  const query = {
    text: `
      delete from "grades"
      where "gradeId" = $1
      returning *
    `,
    values: [gradeId],
  };
  db.query(query)
    .then((result) => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `There was no entry associated with that id`,
        });
      } else {
        res.status(204).json(result.rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: `An unexpected error has occurred`,
      });
    });
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000!`);
});
