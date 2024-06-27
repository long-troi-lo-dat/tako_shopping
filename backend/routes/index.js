const express = require("express");
const router = express.Router();

// Module imports
const userRouter = require("./User");

router.use("/users", userRouter);

module.exports = router;
