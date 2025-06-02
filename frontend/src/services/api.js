import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Update if your backend runs on different port
})

// Products
export const fetchProducts = () => API.get('/products')
export const fetchProductById = (id) => API.get(`/products/${id}`)

// Reviews
export const fetchProductReviews = (productId) => API.get(`/products/${productId}/reviews`)
export const addProductReview = (productId, review) => API.post(`/products/${productId}/reviews`, review)

export default API