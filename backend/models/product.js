const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Product description is required']
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price must be positive']
  },
  images: [{
    type: String,
    required: [true, 'At least one image is required']
  }],
  sizes: [{
    type: String,
    enum: ['50ml', '100ml', '150ml', '200ml']
  }],
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Check if model already exists before compiling
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);