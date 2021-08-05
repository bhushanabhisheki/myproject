"use strict";

const express = require("express");

const path = require("path");

const SETTINGS = require("./mock/settings.json");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "*");
  next();
});
app.use(express.json());

app.get("/ewp-dashboard/settings", (req, res) => {
  res.json(SETTINGS);
});

app.listen(PORT, HOST);
console.log(`Running on http://localhost:${PORT}`);
