# Perfume Shop E-Commerce Website

![Project Screenshot](./assets/images/screenshot.png) <!-- Add a screenshot later -->

A modern e-commerce website for a perfume shop with product listings, detailed product pages, and review functionality.

## Features

- **Responsive Design**: Works on all device sizes
- **Product Catalog**: Display products with images, descriptions, and prices
- **Product Details**: Gallery view, size selection, and detailed descriptions
- **Review System**: Users can read and submit reviews
- **Social Sharing**: Share products on social media platforms

## Technologies Used

### Frontend
- React.js
- React Router
- CSS Modules
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose ODM

## Installation

Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v18 or later)
- MongoDB Atlas account or local MongoDB installation
- Git

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file with your MongoDB URI:
   ```bash
   MONGODB_URI=your_mongodb_atlas_connection_string
   PORT=5000
4. Start the server:
   ```bash
   npm run dev

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
2. Install dependencies:
   ```bash
  npm install
3. Start the development server:
   ```bash
  npm run dev

### Project Structure
perfume-shop/
├── backend/               # Backend code
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── index.js           # Main server file
│   └── package.json
├── frontend/              # Frontend code
│   ├── public/            # Static files
│   ├── src/               # React source code
│   └── package.json
└── README.md              # This file

### API Endpoints

Endpoint	Method	Description
/api/products	GET	Get all products
/api/products/:id	GET	Get single product
/api/products/:productId/reviews	GET	Get product reviews
/api/products/:productId/reviews	POST	Add new review

### Environment Variables
  See .env.example files in both frontend and backend folders for required variables.

## Contributing

1. Fork the project

2. Create your feature branch (git checkout -b feature/AmazingFeature)

3. Commit your changes (git commit -m 'Add some amazing feature')

4. Push to the branch (git push origin feature/AmazingFeature)

5. Open a Pull Request

## Contact

Harsha Vardhan Boyidapu - harshavardhanboyidapu@gmail.com
Project Link - [text](https://github.com/HarshaVardhan3112/Perfume-shop)
