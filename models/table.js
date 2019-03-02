module.exports = function(sequelize, DataTypes) {

  //Table creation for farmer in sequelize
  
  var Farmers = sequelize.define("Farmers", {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT
  });

  var Farms = sequelize.define("Farms",   {
    farm_name: DataTypes.TEXT
  });

  var Products = sequelize.define("Products", {
  });

  var Meats = sequelize.define("Meats"  {
    meat_name: DataTypes.TEXT,
    meat_amt: DataTypes.STRING
  });

  var Dairy = sequelize.define("Dairy"  {
    dairy_name: DataTypes.TEXT,
    dairy_amt: DataTypes.STRING
  });

  var Produce = sequelize.define("Produce"  {
    produce_name: DataTypes.TEXT,
    produce_amt: DataTypes.STRING
  });

  //Add farmersID to Farm
  Farmers.belongsto(Farm);

  //Add productsID to Farm
  Products.belongsto(Farm);

  //Adds meatsID to Products
  Meats.belongsto(Products);

  //Adds dairyID to Products
  Dairy.belongsto(Products);

  //Adds produceID to Products
  Produce.belongsto(Products);


  // return Farms;

  // return Farmers;

  // return Products;

  // return Meats;

  // return Produce;

  // return Dairy
};
