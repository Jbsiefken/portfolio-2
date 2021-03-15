// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


const app = express();

// Parsers for POST data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Angular files
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/postData', express.json(), (req, res) => {
    res.json(req.body);
});

//(eventually) api for contact form
app.post('/api/email', express.json(), (req, res) => {
  res.json(req.body);
});

// all non-api routes go to Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/portfolio-two/index.html'));
});

const port = 3000;
//app.set('port', 3000);

const server = http.createServer(app);

app.listen(port, (err) => {
  if (err) {
      return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});