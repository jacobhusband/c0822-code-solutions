const express = require('express');
const middleware = express.json();
const fs = require('fs');
const app = express();

app.use(middleware);

fs.readFile('data.json', 'utf8', (err, data) => {
  const obj = JSON.parse(data);
  if (err) throw err;
  app.get('/api/notes', (req, res) => {
    res.json(Object.values(obj.notes));
  });

  app.get('/api/notes/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    if (req.params.id > 0) {
      if (obj.notes[id]) {
        res.status(200);
        res.json(obj.notes[id]);
      } else {
        res.status(404);
        res.json({ error: 'That id does not exist.' });
      }
    } else {
      res.status(400);
      res.json({ error: 'The id must be a positive integer.' });
    }
    next();
  });

  app.post('/api/notes/', (req, res, next) => {
    if (!req.body.content) {
      res.status(400);
      res.json({
        error: 'The request body did not contain a content property.'
      });
    } else {
      const createdNote = req.body;
      createdNote.id = obj.nextId;
      obj.notes[obj.nextId] = createdNote;
      obj.nextId++;
      fs.writeFile('data.json', JSON.stringify(obj, null, 2), err => {
        if (err) {
          res.status(500);
          res.json({ error: 'An unexpected error occured.' });
        } else {
          res.status(201);
          res.json(createdNote);
        }
      });
    }
  });

  app.delete('/api/notes/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    if (id < 1) {
      res.status(400);
      res.json({ error: 'Id cannot be a negative integer.' });
    }
    if (!obj.notes[id]) {
      res.status(404);
      res.json({ error: 'That id does not exist.' });
    }
    delete obj.notes[id];
    fs.writeFile('data.json', JSON.stringify(obj, null, 2), err => {
      if (err) {
        res.status(500);
        res.json({ error: 'An unexpected error has occurred' });
      } else {
        res.sendStatus(204);
      }
    });
  });

  app.put('/api/notes/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    if (id < 1 || !req.body.content) {
      res.status(400);
      res.json({
        error:
          'Id must be a positive integer and request body must contain the content property.'
      });
    }
    if (!obj.notes[id]) {
      res.status(404);
      res.json({ error: 'That id does not exist.' });
    }
    obj.notes[id].content = req.body.content;
    const createdNote = obj.notes[id];
    fs.writeFile('data.json', JSON.stringify(obj, null, 2), err => {
      if (err) {
        res.status(500);
        res.json({ error: 'An unexpected error has occurred' });
      } else {
        res.status(200);
        res.json(createdNote);
      }
    });
  });
});

app.listen(3000, () => {
  // console.log("The server is ready for lift off!");
});
