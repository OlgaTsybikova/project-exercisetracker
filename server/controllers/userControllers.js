require("dotenv").config();
const debug = require("debug")("users:server:controller");
const User = require("../../database/models/User");

const userRegister = async (req, res, next) => {
  const { username } = req.body;
  const user = await User.findOne({ username });

  if (user) {
    const error = new Error();
    error.statusCode = 409;
    error.message = "This user already exists...";
    next(error);
  }
  try {
    const newUser = { username: req.body.username };
    const createdUser = await User.create(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    error.statusCode = 400;
    error.message = "Wrong user data..";
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
    debug("Users request received");
  } catch (error) {
    error.StatusCode = 404;
    error.customMessage = "Not found";
    next(error);
  }
};
module.exports = { userRegister, getUsers };
