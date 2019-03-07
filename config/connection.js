// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("qyxpm17gd6uzwyj4", "e8fb22t1ypsayg9s", "r9v9mv3qhxtgv67f", {
  host: "pwcspfbyl73eccbn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;