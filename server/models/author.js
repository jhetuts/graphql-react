const mongoose = require("mongoose");

const { Schema } = mongoose;

const Author = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("Authors", Author);
