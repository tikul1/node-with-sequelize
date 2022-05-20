const { sequelize, users } = require("../config");
const db = require("../config");

const others = db.others;

const addOther = async (req, res) => {
  let data = {
    hobby: req.body.hobby,
    education: req.body.education,
    user_id: req.body.user_id,
  };
  const other = await others.create(data);
  res.status(201).send(other);
};

const othersList = async (req, res) => {
  let other = await others.findAll({ include: [{ model: users, as: "user" }] });
  res.status(201).send(other);
};

module.exports = { addOther, othersList };
