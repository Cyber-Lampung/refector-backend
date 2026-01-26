const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
dotenv.config({ debug: true });

// initialisasi app
const app = express();
app.use(express.json());
app.use(helmet());

// health route
app.get("/health", (req, res, next) => {
  res.status(200).json({ status: "succes", message: "Server Is Runing" });
});

// router path

const userRoute = require("./routes/User.routes.js");

app.use("/api", userRoute);

// error handle
app.use((req, res, next) => {
  return res.status(404).json({ status: "invalid", message: "invalid path " });
});

module.exports = app;
