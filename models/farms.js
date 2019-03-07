var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var Farms = sequelize.define("Formdata", {
    farm_name = Sequelize.STRING,
    img_src = Sequelize.TEXT,
    zipcode = Sequelize.STRING,
    description = Sequelize.TEXT
});


Farms.sync();

module.exports = Farms;