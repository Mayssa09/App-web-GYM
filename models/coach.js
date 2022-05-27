const mongoose = require("mongoose");

const coachSchema = mongoose.Schema({
  first_Name: { type: String },
  last_Name: { type: String },
  phone: { type: Number },
  speciality: { type: String },
  availability: { type: String },
});

module.exports = coach = mongoose.model("coachs", coachSchema);
