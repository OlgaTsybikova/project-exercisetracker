const express = require("express");
const {
  userRegister,
  getUsers,
} = require("../server/controllers/userControllers");
const createExercise = require("../server/controllers/exerciseControllers");
const getLogsOfExercisesByUserId = require("../server/controllers/logControllers");

const userRouter = express.Router();

userRouter.post("/", userRegister);
userRouter.get("/", getUsers);
userRouter.post("/:_id/exercises", createExercise);
userRouter.get("/:_id/logs", getLogsOfExercisesByUserId);
module.exports = userRouter;
