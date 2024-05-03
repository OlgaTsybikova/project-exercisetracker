const express = require("express");
const app = express();
const cors = require("cors");
const connectDataBase = require("./database");
const userRouter = require("./routers/userRouter");
const debug = require("debug");
const chalk = require("chalk");
require("dotenv").config();

app.use(cors());
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

(async () => {
  try {
    await connectDataBase(process.env.MONGO_URI);
  } catch {
    debug(chalk.red("Error initializing server"));
  }
})();

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
