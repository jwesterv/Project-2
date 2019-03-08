// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  //Mainpage Path (default)
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // //Login route
  // app.get("/login", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  //Form route
  app.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/farmerform.html"));
  });

  //Profile route
  app.get("/profile", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  // //Consumer route
  // app.get("/consumer", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/consumer.html"));
  // });

  //Path holder
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.redirect("/");
  });

};
