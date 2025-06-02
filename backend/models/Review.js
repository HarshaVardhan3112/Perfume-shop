const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  user: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot be more than 5']
  },
  comment: {
    type: String,
    required: [true, 'Please provide a comment'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Check if model already exists before compiling
module.exports = mongoose.models.Review || mongoose.model('Review', reviewSchema);