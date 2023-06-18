"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userscore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userscore.belongsTo(models.usergame, {
        constraints: false,
        foreignKey: "UserGameId",
      });
    }
  }
  userscore.init(
    {
      UserGameId: DataTypes.INTEGER,
      score: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "userscore",
    }
  );
  return userscore;
};
