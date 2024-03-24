const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  matricule: {
    type: Number,
    required: false,
    unique: true,
  },
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
  attendance: [
    {
      subject: { type: mongoose.Schema.Types.ObjectId, ref: "Matier" },
      absences: { type: Number, default: 0 },
      date: [Date],
    },
  ],
});

//Export the model
module.exports = mongoose.model("Student", studentSchema);
