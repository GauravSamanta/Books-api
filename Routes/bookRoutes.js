const express = require("express");
const router = express.Router();

const {
  getBooks,
  getBookByISBN,
  getBookByAuthor,
  getBookByTitle,
  getBookReview,
  postReview,
  editReview,
  deleteReview,
} = require("../Controllers/booksfnc");

router.route("/books").get(getBooks).post();
router.route("/books/:ISBN").get(getBookByISBN);
router.route("/books/:Author").get(getBookByAuthor);
router.route("/books/:title").get(getBookByTitle);

router
  .route("/books/:id/review")
  .get(getBookReview)
  .post(postReview)
  .patch(editReview)
  .delete(deleteReview);



  module.exports=router;