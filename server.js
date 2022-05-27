require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const userClient = require("./routes/user");
const activity = require("./routes/activity");
const coach = require("./routes/coach");
const passort = require("passport");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(passort.initialize());

app.use(express.json());

app.use("/Client", userClient);

app.use("/Activity", activity);

app.use("/Coach", coach);

connectDB();

const PORT = process.env.PORT || process.env.port;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
