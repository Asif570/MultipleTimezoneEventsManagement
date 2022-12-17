const express = require("express");
const { notfoundhundeler, hundanError } = require("./error");
const router = require("./router");
const app = express();
app.use(require("./middleware"));
app.use(router);
app.use(notfoundhundeler);
app.use(hundanError);

module.exports = app;
