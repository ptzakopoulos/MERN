const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/users");

router.post("/test", userControllers.postTest);

router.get("/tests", userControllers.getShop);

module.exports = router;
