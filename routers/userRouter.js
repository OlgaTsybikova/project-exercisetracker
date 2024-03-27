const express = require("express");
const {
  userRegister,
  getUsers,
} = require("../server/controllers/userControllers");

const userRouter = express.Router();

userRouter.post("/users", userRegister);
userRouter.get("/users", getUsers);
module.exports = userRouter;
