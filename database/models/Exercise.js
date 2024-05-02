const { Schema, model, SchemaTypes } = require("mongoose");

const ExerciseSchema = new Schema(
  {
    user_id: { type: SchemaTypes.ObjectId, ref: "User" },
    description: String,
    duration: Number,
    date: Date,
  },
  { versionKey: false }
);

const Exercise = model("Exercise", ExerciseSchema, "exercises");

module.exports = Exercise;
