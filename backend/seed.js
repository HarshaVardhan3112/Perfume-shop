const mongoose = require('mongoose');
const Product = require('./models/product');
const connectDB = require('./config/db');
require('dotenv').config();

const products = [
  {
    name: 'Eau de Parfum',
    description: 'A luxurious floral scent with hints of jasmine and vanilla',
    price: 89.99,
    images: ['perfume1.jpg', 'perfume1-alt.jpg'],
    sizes: ['50ml', '100ml'],
    featured: true
  },
  {
    name: "Floral Elegance",
    description: "A delicate blend of rose and jasmine",
    price: 75.99,
    images: ["floral-elegance.jpg"],
    sizes: ["50ml", "100ml"],
    featured: true
  },
  {
    name: "Citrus Splash",
    description: "Zesty orange and lemon fragrance",
    price: 65.50,
    images: ["citrus-splash.jpg"],
    sizes: ["50ml", "100ml", "150ml"],
    featured: false
  }
  // Add 3-4 more products
];

const seedDB = async () => {
  try {
    await connectDB();
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();