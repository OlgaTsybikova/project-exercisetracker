require("dotenv").config();
const User = require("../../database/models/User");
const Exercise = require("../../database/models/Exercise");

const createExercise = async (req, res, next) => {
  const userId = req.params._id;
  const { description, duration, date } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      res.send("Could not find user");
    } else {
      const newExercise = {
        user_id: user._id,
        description,
        duration,
        date: date ? new Date(date) : new Date(),
      };
      const createdExercise = await Exercise.create(newExercise);
      res.status(201).json({
        _id: user._id,
        username: user.username,
        duration: newExercise.duration,
        description: newExercise.description,
        date: new Date(newExercise.date).toDateString(),
      });
      console.log("Exercise has been created correctly");
    }
    /*  await User.findOneAndUpdate(
      { _id: userId },
      { $push: { createdExercises: createExercise.id } }
    ); */
  } catch (error) {
    error.customMessage = "Could not create the exercise";
    error.statusCode = 400;
    console.log("Error creating exercise");
    next(error);
  }
};
module.exports = createExercise;
