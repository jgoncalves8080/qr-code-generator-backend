const express = require('express');
const server = express();
const pdfS = require('html-pdf');
const ejs = require('ejs');

server.get('/', (req, res) => {
  res.send('Hello world');
});

const port = 3636;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
