require("express-async-errors");
const { StatusCodes } = require("http-status-codes");
const book = require("../Models/book");
const review = require("../Models/review");

const getBooks = async (req, res) => {
  const books = await book.find();
  res.status(StatusCodes.OK).json(books);
};

const postBooks = async (req, res) => {
  const temp = await book.create(req.body);
  res.status(StatusCodes.OK).json(temp);
};

const searchBook = async (req, res) => {
  const params = req.body;
  const temp = await book.find(params);
  res.json(temp);
};

const getBookReview = (req, res) => {
  const { id } = req.params;
  const temp = review.find({ bookID: id });
  res.json({ temp });
};

const postReview = async (req, res) => {
  const { id } = req.params;
  const temp = await review.create({ ...req.body, bookID: id });

  res.json(temp);
};

const editReview = async (req, res) => {
  const { user_id, book_id } = req.params;
  const temp = await review.findOneAndUpdate(
    { bookID: book_id, userID: user_id },
    req.body,
    {
      new: true,
    }
  );
  res.json(temp);
};

const deleteReview = (req, res) => {
  const { user_id, book_id } = req.params;
  const temp = review.findOneAndDelete({ bookID: book_id, userID: user_id });
  res.json(temp);
};

module.exports = {
  getBooks,
  postBooks,
  searchBook,
  getBookReview,
  postReview,
  editReview,
  deleteReview,
};
