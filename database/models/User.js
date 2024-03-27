const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
  },
  { versionKey: false }
);

const User = model("User", UserSchema, "users");

module.exports = User;
