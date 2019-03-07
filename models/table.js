module.exports = function (sequelize, DataTypes) {

  //Table creation for farmer in sequelize

  var Formdata = sequelize.define("Formdata", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    website: DataTypes.STRING,
    description: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    farm_name: DataTypes.STRING,
    farm_address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    deliver: DataTypes.STRING,
    option: DataTypes.STRING,
  });

  return Formdata;

  

};
