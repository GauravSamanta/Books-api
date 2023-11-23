require("express-async-errors");
const { StatusCodes } = require("http-status-codes");
const { StatusCodes } = require("http-status-codes");
const book = require("../Models/books");

const getBooks = async (req, res) => {
  const books = await book.find();
  res.status(StatusCodes.OK).json(books);
};

const postBooks = async (req, res) => {
  const temp = await book.create(temp);
  res.status(StatusCodes.OK);
};

const getBookByISBN = (req, res) => {
  console.log("isbn");
  res.json(req.params.ISBN);
};

const getBookByAuthor = (req, res) => {
  console.log("author");
  res.json(req.params.author);
};

const getBookByTitle = (req, res) => {
  console.log(title);
  res.json(req.params.title);
};

const getBookReview = (req, res) => {
  res.json(req.params);
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
  getBookByISBN,
  getBookByAuthor,
  getBookByTitle,
  getBookReview,
  postReview,
  editReview,
  deleteReview,
};
