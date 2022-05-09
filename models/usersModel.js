// const { sequelize } = require("sequelize");
// const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        underscored: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your name",
          },
        },
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
