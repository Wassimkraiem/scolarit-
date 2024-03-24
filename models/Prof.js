const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const profSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subject: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Matier",
    },
  ],
});

//Export the model
module.exports = mongoose.model("Prof", profSchema);
