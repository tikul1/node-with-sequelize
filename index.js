const express = require("express");
const app = express();
const cors = require("cors");
const { Sequelize } = require("sequelize/types");

app.use(express.json());

const corsOptions = {
  origin: "https://localhost:8081",
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server running at 8080");
});
