const express = require('express');
const config = require('./config/config');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});