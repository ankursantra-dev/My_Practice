const principleRoute = require("./principle.routes");
const studentRoute = require("./student.routes");
const professorRoute = require("./professor.routes");

// Exports a function
// This function expects app to be passed in
module.exports = (app) => {
  app.use("/principle", principleRoute);
  app.use("/student", studentRoute);
  app.use("/professor", professorRoute);
};
