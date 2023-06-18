"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usergame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usergame.hasMany(models.userscore, {
        constraints: false,
        foreignKey: "UserGameId",
      });
    }
  }
  usergame.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "usergame",
    }
  );
  return usergame;
};
