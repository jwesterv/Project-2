module.exports = function (sequelize, DataTypes) {

    var farm = sequelize.define("farm", {
        farm_name: DataTypes.STRING,
        img_src: DataTypes.TEXT,
        zipcode: DataTypes.STRING,
        description: DataTypes.TEXT

    });


    return farm;
};

