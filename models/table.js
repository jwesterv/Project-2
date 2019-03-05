module.exports = function (sequelize, DataTypes) {

  //Table creation for farmer in sequelize

  var Farmers = sequelize.define("Farmers", {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    website: DataTypes.STRING,
    description: DataTypes.TEXT,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  });

  var Farms = sequelize.define("Farms", {
    farm_name: DataTypes.TEXT,
    farm_address: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    deliver: DataTypes.BOOLEAN
  });

  var Products = sequelize.define("Products", {
  });

  //Add farmersID to Farm
  Farmers.belongsTo(Farms);

  //Add productsID to Farm
  Products.belongsTo(Farms);


  return Farms;

  return Farmers;

  return Products;

};
