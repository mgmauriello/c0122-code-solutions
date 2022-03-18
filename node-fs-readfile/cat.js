const fs = require('fs');

const readFiles = index => {
  const files = process.argv.length;

  fs.readFile(process.argv[index], 'utf8', (err, data) => {
    if (err) throw (err);
    console.log(data);

    const i = index + 1;
    if (i < files) {
      readFiles(i);
    }
  });
};
readFiles(2);
