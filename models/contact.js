const mongoose = require("mongoose");

const contactschema = new mongoose.Schema({
  username: String,
  mail: { type: String, required: true, unique: true },
  age: String,
});

module.exports = mongoose.model("contact", contactschema);
