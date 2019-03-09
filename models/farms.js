module.exports = function (sequelize, DataTypes) {

    var Farm = sequelize.define("farm", {
        farm_name: DataTypes.STRING,
        img_src: DataTypes.TEXT,
        zipcode: DataTypes.STRING,
        description: DataTypes.TEXT

    });


    return Farm;
};

