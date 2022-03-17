const dataJSON = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'read') {
  fs.readFile('./data.json', 'utf8', err => {
    if (err) throw (err);
    for (const id in dataJSON.notes) {
      console.log(id, dataJSON.notes[id]);
    }
  });
} else if (process.argv[2] === 'create') {
  dataJSON.notes[dataJSON.nextId++] = process.argv[3];

  fs.writeFile('./data.json', `${JSON.stringify(dataJSON, null, 2)}`, 'utf8', err => {
    if (err) throw (err);
  });
} else if (process.argv[2] === 'update') {
  dataJSON.notes[`${process.argv[3]}`] = process.argv[4];

  fs.writeFile('./data.json', `${JSON.stringify(dataJSON, null, 2)}`, 'utf8', err => {
    if (err) throw (err);
  });
} else if (process.argv[2] === 'delete') {
  delete dataJSON.notes[`${process.argv[3]}`];

  fs.writeFile('./data.json', `${JSON.stringify(dataJSON, null, 2)}`, 'utf8', err => {
    if (err) throw (err);
  });
}
