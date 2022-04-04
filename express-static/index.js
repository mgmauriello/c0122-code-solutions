const express = require('express');
const path = require('path');
const app = express();

const joinedUrl = path.join(__dirname, 'public');

app.use(express.static(joinedUrl));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
