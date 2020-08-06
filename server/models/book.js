const mongoose = require("mongoose");

const { Schema } = mongoose;

const Book = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model("Books", Book);
