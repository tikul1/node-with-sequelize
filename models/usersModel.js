// const { sequelize } = require("sequelize");
// const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
    // {
    //   timestamps: false,
    // }
  );
  return user;
};
