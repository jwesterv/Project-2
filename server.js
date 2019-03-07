require("dotenv").config();
var express = require("express");
var jwt = require('express-jwt');

var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});
var models = require("./models");
var authRoutes = require("./routes/auth.routes");
var apiRoutes = require("./routes/api.routes");
var Routes = require("./controllers/controller");
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/html.routes")(app);
app.use("/auth", authRoutes);
app.use(auth);
app.use("/api", apiRoutes);
app.use(Routes);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

module.exports = app;
