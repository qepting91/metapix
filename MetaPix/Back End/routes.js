const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.post("/image", controllers.searchImage);

module.exports = router;
