const mongoose = require("mongoose");

const review = new mongoose.Schema({
  bookID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "book",
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("review", review);
