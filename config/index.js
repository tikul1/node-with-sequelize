const config = require("./config");
const { Sequelize, DataTypes } = require("sequelize");
const { dialect } = require("./config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: 0,
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
db.sequelize = sequelize;

db.users = require("../models/usersModel")(sequelize, DataTypes);
db.others = require("../models/otherModel")(sequelize, DataTypes);

db.users.hasOne(db.others);
db.others.belongsTo(db.users, { as: "user", foreignKey: { name: "user_id" } });

module.exports = db;
