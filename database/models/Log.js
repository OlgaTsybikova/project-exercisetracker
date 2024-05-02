const { Schema, model, SchemaTypes } = require("mongoose");

const LogSchema = new Schema(
  {
    user_id: { type: SchemaTypes.ObjectId, ref: "User" },
    count: Number,
    log: [{ type: SchemaTypes.ObjectId, ref: "Exercise", default: [] }],
  },
  { versionKey: false }
);

const Log = model("Log", LogSchema, "logs");

module.exports = Log;
