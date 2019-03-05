// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  //Mainpage Path (default)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //Login Path
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  //Form Path
  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/farmerform.html"));
  });

  //Path holder
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/"));
  });

  //Path holder
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/"));
  });

  //Path holder
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/"));
  });

};
