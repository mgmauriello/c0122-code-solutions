const express = require('express');
const app = express();
const dataJSON = require('./data.json');
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const key in dataJSON.notes) {
    arr.push(dataJSON.notes[key]);
  }
  res.json(arr);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!dataJSON.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.json(dataJSON.notes[id]);
  }
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/notes/', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = dataJSON.nextId++;
    dataJSON.notes[req.body.id] = req.body;
    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = Number(req.params.id);
  if (!Number.isInteger(deleteId)) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!dataJSON.notes[deleteId]) {
    res.status(404).json({ error: `cannot find note with id ${deleteId}` });
  } else {
    delete dataJSON.notes[deleteId];
    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const replaceId = Number(req.params.id);
  if (!Number.isInteger(replaceId)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!dataJSON.notes[replaceId]) {
    res.status(404).json({ error: `cannot find note with id ${replaceId}` });
  } else {
    dataJSON.notes[replaceId].content = req.body.content;

    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(dataJSON.notes[replaceId]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
