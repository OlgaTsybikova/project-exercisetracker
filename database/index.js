require("dotenv").config();

const chalk = require("chalk");
const debug = require("debug")("series:database:root");
const mongoose = require("mongoose");

const connectDataBase = () =>
  new Promise((resolve, reject) => {
    mongoose.set("debug", true);
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        debug(chalk.green("connected to database"));
        resolve();
      })
      .catch((error) => {
        debug(chalk.red("error detected:", error.message));
        reject();
        return;
      });
  });

module.exports = connectDataBase;
