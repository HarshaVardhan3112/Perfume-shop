import { useState, useEffect } from 'react'
import { fetchProductReviews, addProductReview } from '../../services/api'
import './ReviewSection.css'


const ReviewSection = ({ productId }) => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newReview, setNewReview] = useState({
    user: '',
    rating: 5,
    comment: '',
  })

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetchProductReviews(productId)
        setReviews(response.data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    getReviews()
  }, [productId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await addProductReview(productId, newReview)
      setReviews([...reviews, response.data])
      setNewReview({ user: '', rating: 5, comment: '' })
    } catch (err) {
      setError(err.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewReview({ ...newReview, [name]: value })
  }

  if (loading) return <div>Loading reviews...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="review-section">
      <h3>Customer Reviews</h3>

      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="user"
            value={newReview.user}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Star{num !== 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Your Review</label>
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Review
        </button>
      </form>

      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review._id} className="review-item">
            <div className="review-header">
              <h4>{review.user}</h4>
              <div className="rating">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
            </div>
            <p className="review-comment">{review.comment}</p>
            <p className="review-date">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewSection