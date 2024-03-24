const mongoose = require("mongoose");
const connect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB Database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect;
