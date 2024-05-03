require("dotenv").config();
const Exercise = require("../../database/models/Exercise");
const User = require("../../database/models/User");

const getLogsOfExercisesByUserId = async (req, res, next) => {
  const {from, to, limit } = req.query;
  const id = req.params._id;
  const user = await User.findById(id);
  if(!user){
    res.send("Could not find user");
    return;
  }
 let dateObject = {};
 if(from){
  dateObject["$gte"] = new Date(from);
 }
 if(to){
  dateObject["$lte"] = new Date(to);
 }
 let filter = {
  user_id: id
 }
 if (from || to){
  filter.date = dateObject;
 }
 const exercises = await Exercise.find(filter).limit(+limit ?? 500);
 const log = exercises.map(e=>({
    description: e.description,
    duration: e.duration,
    date: e.date.toDateString()
 }))
 res.json({
  username: user.username,
  count: exercises.length,
  _id:user._id,
  log
})
}; 
module.exports = getLogsOfExercisesByUserId;
