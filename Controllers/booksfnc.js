require("express-async-errors");
const { StatusCodes } = require("http-status-codes");
const book = require("../Models/book");

const getBooks = async (req, res) => {
  const books = await book.find();
  res.status(StatusCodes.OK).json(books);
};

const postBooks = async (req, res) => {
  const temp = await book.create(req.body);
  res.status(StatusCodes.OK).json(temp);
};

const searchBook = async(req, res) => {
  const params = req.body;
  const temp= await book.find(params);
  res.json(temp);
};

const getBookReview = (req, res) => {
  res.send("Book Review");
};

const postReview = (req, res) => {
  res.json(req.json);
};

const editReview = (req, res) => {
  res.json(req.body, req.params);
};

const deleteReview = (req, res) => {
  res.json(req.params);
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
