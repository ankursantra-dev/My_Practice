// load library
const express = require("express");

const app = express();

// load routes
require("./routes/index.routes")(app);

module.exports = app;
