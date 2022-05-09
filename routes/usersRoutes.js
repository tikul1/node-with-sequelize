const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.post("/adduser", userController.addUser);
router.get("/alluser", userController.allUser);
router.get("/userbyid/:id", userController.userById);
router.put("/updateuser/:id", userController.updateUser);
router.delete("/removeuser/:id", userController.removeUser);

module.exports = router;
