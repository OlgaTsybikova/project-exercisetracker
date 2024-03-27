const express = require("express");
const userRegister = require("../server/controllers/userControllers");

const userRouter = express.Router();

userRouter.post("/users", userRegister);

module.exports = userRouter;
