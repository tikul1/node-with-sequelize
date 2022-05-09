const res = require("express/lib/response");
const { sequelize } = require("../config");
const db = require("../config");

const users = db.users;

const addUser = async (req, res) => {
  let data = {
    name: req.body.name,
    country: req.body.country,
    value: req.body.value,
  };
  const user = await users.create(data);
  res.status(201).send(user);
};

const allUser = async (req, res) => {
  let user = await users.findAll({
    // offset: 3,
    // limit: 2,
    // where: sequelize.where(
    //   sequelize.fn("char_length", sequelize.col("name")),
    //   6
    // ),
  });
  res.status(201).send(user);
};

const userById = async (req, res) => {
  let id = req.params.id;
  let user = await users.findOne({ where: { id: id } });
  res.status(201).send(user);
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  let user = await users.update(req.body, { where: { id: id } });
  res.status(201).json({ user });
};

const removeUser = async (req, res) => {
  let id = req.params.id;
  await users.destroy({ where: { id: id } });
  res.status(201).send("user deleted");
};

module.exports = { addUser, allUser, userById, updateUser, removeUser };
