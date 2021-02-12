// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular files
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/postData', bodyParser.json(), (req, res) => {
    res.json(req.body);
});

//(eventually) api for contact form
app.post('/api/email', bodyParser.json(), (req, res) => {
  res.json(req.body);
});

// all non-api routes go to Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', 3000);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:3000`));