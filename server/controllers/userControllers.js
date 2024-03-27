require("dotenv").config();
const User = require("../database/models/User");

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
    const newUser = { username };
    await User.create(newUser);

    res.status(201).json({ username: user.username, _id: user._id });
  } catch (error) {
    error.statusCode = 400;
    error.message = "Wrong user data..";
    next(error);
  }
};
module.exports = userRegister;
