const express = require("express");
const projectRouter = require("./src/routes/project.js");
const profileRouter = require("./src/routes/profile");
const app = express();
const port = process.env.PORT || 8000;


app.use("/projects", projectRouter);
app.use("/profile", profileRouter);
app.get("/", function (req, res) {
  res.send("Mercer Portfolio API!");
});
module.exports.app = app;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
