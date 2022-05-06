const config = require("../config/config");
const { Sequelize, DataTypes } = require("sequelize");
const { dialect } = require("../config/config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("error: " + e);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./usersModel")(sequelize, DataTypes);

module.exports = db;
