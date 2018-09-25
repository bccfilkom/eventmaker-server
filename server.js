const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

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

app.get("/", (req, res) => {
  res.status(200).send(null);
});

app.listen(PORT, () => {
  console.log(`Server is starting up at port ${PORT}`);
});
