const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


// Express route handlers

app.get('/api', (req, res) => {
  res.send('Hi');
});

app.get('/api/values/all', async (req, res) => {
  res.send({
    host: keys.redisHost,
    port: keys.redisPort,});
});

app.listen(5000, (err) => {
  console.log('Listening');
});
