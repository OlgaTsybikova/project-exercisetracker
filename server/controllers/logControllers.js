require("dotenv").config();
const Exercise = require("../../database/models/Exercise");
const Log = require("../../database/models/Log");

const getLogsOfExercisesByUserId = async (req, res, next) => {
  const filter = {};
  const userId = req.params._id;
  if (req.query?.user) {
    console.log(`Get exercises by user request received`);
    filter.user_id = req.userId;
  }

  const exercises = await Exercise.find(filter);
};
module.exports = getLogsOfExercisesByUserId;
