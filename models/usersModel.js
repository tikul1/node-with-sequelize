module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      underscored: true,
      allowNull: false,
      // defaultValue: "ABC",
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
  });

  return user;
};
