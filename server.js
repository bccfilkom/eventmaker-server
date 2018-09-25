const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const jwtMw = require("./middlewares/Jwt");

const app = express();

const PORT = 3000;

app.use(logger("dev"));

app.use(
  cors({
    preflightContinue: true,
    credentials: true,
    allowedHeaders: ["content-type", "authorization"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
    origin: "*"
  })
);

app.use(bodyParser.json());

app.use(jwtMw);

app.get("/", (req, res) => {
  res.status(200).send(null);
});

// error handler middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  const status = err.status || 500;
  res.status(status).json({
    message: "something is broken"
  });
});

app.listen(PORT, () => {
  console.log(`Server is starting up at port ${PORT}`);
});
