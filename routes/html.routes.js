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

  //Login route
  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
    var jwt = require('express-jwt');

var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});
var authRoutes = require("../routes/auth.routes");
app.use("/auth", authRoutes);
app.use(auth);
   
  });

  //Form route
  app.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/farmerform.html"));
  });

  //Profile route
  app.get("/profile", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  app.get("/profilenew", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/profilenew.html"));
  });

  //Consumer route
  app.get("/consumer", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/consumer.html"));
  });

  //Consumer route
  app.get("/unicornprofile", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/psuedoprofile.html"));
  });

  //Terms of Use route
  app.get("/terms", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/terms.html"));
  })

  //Privacy Notice route
  app.get("/privacy", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/privacy.html"));
  })

  //Contact route
  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  })

  //Vendor Registration route
  app.get("/registration", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/registration.html"));
  })

  //Path holder
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.redirect("/");
  });

};
