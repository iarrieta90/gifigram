const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const { config } = require("./config");
const { errorMiddleware } = require("./middlewares");
const { userRouter } = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));
app.use(
  cors({
    origin: config.client.url,
  }),
);

app.use(userRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-world",
  });
});

app.use(errorMiddleware);

module.exports = {
  app: app,
};
