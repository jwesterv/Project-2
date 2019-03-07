module.exports = function (sequelize, DataTypes) {

  //Table creation for farmer in sequelize

  var Formdata = sequelize.define("Formdata", {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    website: DataTypes.STRING,
    description: DataTypes.TEXT,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    farm_name: DataTypes.TEXT,
    farm_address: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    deliver: DataTypes.STRING,
    option: DataTypes.STRING,
  });

  return Formdata;

};
