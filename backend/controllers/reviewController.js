const Review = require('../models/Review');
const Product = require('../models/product');

// @desc    Get reviews for a product
// @route   GET /api/products/:productId/reviews
// @access  Public
exports.getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Add a review
// @route   POST /api/products/:productId/reviews
// @access  Public (later we'll add authentication)
exports.addReview = async (req, res) => {
  try {
    const { user, rating, comment } = req.body;

    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const review = new Review({
      product: req.params.productId,
      user,
      rating,
      comment
    });

    const createdReview = await review.save();
    res.status(201).json(createdReview);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};