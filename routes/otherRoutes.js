const express = require("express");
const otherController = require("../controller/otherController");

const router = express.Router();

router.post("/addother", otherController.addOther);
router.get("/otherlist", otherController.othersList);
module.exports = router;
