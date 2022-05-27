const mongoose = require("mongoose");

const userClientSchema = new mongoose.Schema({
  first_Name: { type: String },
  last_Name: { type: String },
  email: { type: String },
  password: { type: String },
  phone: { type: Number },
  role: { type: Number, default: 1 },
});

module.exports = UserClient = mongoose.model("clients", userClientSchema);
