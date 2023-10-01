const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");

const app = new express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());

const router = require("./src/routes/api");
app.use("/api", router);

app.use((req, res, next) => {
  res.status(404).json({ status: "error", message: "Not Found" });
});

module.exports = app;
