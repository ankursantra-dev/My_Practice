const principleRoute = require("./principle.routes");
const studentRoute = require("./student.routes");
const professorRoute = require("./professor.routes");

module.exports = (app) => {
  app.use("/principle", principleRoute);
  app.use("/student", studentRoute);
  app.use("/professor", professorRoute);
};
