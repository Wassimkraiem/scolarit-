const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const matierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  coeff: {
    type: Number,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Matier", matierSchema);
