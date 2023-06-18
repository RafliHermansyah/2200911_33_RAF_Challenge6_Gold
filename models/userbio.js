"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userbio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userbio.belongsTo(models.usergame, {
        constraints: false,
        foreignKey: "UserGameId",
      });
    }
  }
  userbio.init(
    {
      UserGameId: DataTypes.INTEGER,
      fullname: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userbio",
    }
  );
  return userbio;
};
