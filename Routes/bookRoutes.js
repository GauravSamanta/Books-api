const express = require("express");
const router = express.Router();

const {
  getBooks,
  postBooks,
  searchBook,
  getBookReview,
  postReview,
  editReview,
  deleteReview,
} = require("../Controllers/booksfnc");

router.route("/books").get(getBooks).post(postBooks);
router.route("/books/:ISBN").post(searchBook);
router
  .route("/books/review/:id")
  .get(getBookReview)
  .post(postReview)
  .patch(editReview)
  .delete(deleteReview);

module.exports = router;
