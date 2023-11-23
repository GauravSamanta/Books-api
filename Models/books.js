const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 60 },
  description: { type: String, required: true },
  tags: { type: [String] },
  reviews: [
    {
      review: String,
      user: String, // You need to specify the type for the 'user' field
    },
  ],
  author: { type: String, required: true }, // 'Type' should be 'type'
});

module.exports = mongoose.model("Book", bookSchema); // Use singular form for the model name
