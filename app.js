// Loads the Express library so i can build a server.
const express = require("express");
// Creates your Express app.
const app = express();

// Loads route.js file
// Passes app into that function
require("./routes/index.routes")(app);

module.exports = app;
