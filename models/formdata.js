var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Formdata = sequelize.define("Formdata", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  website: Sequelize.STRING,
  description: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  farm_name: Sequelize.STRING,
  farm_address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipcode: Sequelize.STRING,
  deliver: Sequelize.STRING,
  option: Sequelize.STRING
});


Formdata.sync();

module.exports = Formdata;
