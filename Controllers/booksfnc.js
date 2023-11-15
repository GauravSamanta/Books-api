const getBooks = (req, res) => {
  res.send("All books");
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
  getBookByISBN,
  getBookByAuthor,
  getBookByTitle,
  getBookReview,
  postReview,
  editReview,
  deleteReview,
};
