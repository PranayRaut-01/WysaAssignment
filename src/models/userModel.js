const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sleepProblemTime: { type: String, required: true },
    bedTime: { type: String, required: true },
    wakingupTime: { type: String, required: true },
    totalSleep: { type: String, required: true }
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);   // colllection name will be users