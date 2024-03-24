const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "prof" },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Maiter" },
});

//Export the model
module.exports = mongoose.model("Class", classSchema);
