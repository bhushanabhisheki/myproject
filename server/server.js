'use strict';

const express = require('express');

const SETTINGS = require('./mock/settings.json');

const USERS = require('./mock/users.json');

const PERSPECTIVE = require('./mock/perspective.json');

const APILIST = require('./mock/apilist.json');

const APPJSON = require('./mock/app.json');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Expose-Headers', '*');
  next();
});
app.use(express.json());

app.get('/ewp-dashboard/settings', (req, res) => {
  res.json(SETTINGS);
});

app.get('/ewp-dashboard/users', (req, res) => {
  res.json(USERS);
});

app.get('/ewp-dashboard/perspective', (req, res) => {
  res.json(PERSPECTIVE);
});

app.get('/ewp-dashboard/apilist', (req, res) => {
  res.json(APILIST);
});

app.get('/ewp-dashboard/app', (req, res) => {
  res.json(APPJSON);
});

app.listen(PORT, HOST);
console.log(`Running on http://localhost:${PORT}`);
