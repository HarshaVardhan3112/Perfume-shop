const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById
} = require('../controllers/productController');
const {
  getProductReviews,
  addReview
} = require('../controllers/reviewController');

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.route('/:productId/reviews').get(getProductReviews).post(addReview);

module.exports = router;