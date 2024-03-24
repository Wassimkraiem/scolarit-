const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connect = require("./config/DBconnect");
const studentRouter = require("./routes/studentRoute");
const matierRouter = require("./routes/matierRoute");
const classRouter = require("./routes/classRoute");
const userRouter = require("./routes/userRouter");
const profRouter = require("./routes/profRoute");
const globalErrorHandler = require("./middlewares/errorHandler");
const morgan = require("morgan");

const AppError = require("./utils/AppError");
connect();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use("/api/v1/student", studentRouter);
app.use("/api/v1/matier", matierRouter);
app.use("/api/v1/class", classRouter);
app.use("/api/v1/prof", profRouter);
app.use("/api/v1/user", userRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
app.listen(PORT, () => {
  console.log("server is running");
});
