import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../services/api'
import Navbar from '../../components/Navbar/Navbar'
import ProductGallery from '../../components/ProductGallery/ProductGallery'
import ReviewSection from '../../components/ReviewSection/ReviewSection'
import ShareButtons from '../../components/ShareButtons/ShareButtons'
import './ProductPage.css'


const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetchProductById(id)
        setProduct(response.data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    getProduct()
  }, [id])

  if (loading) return <div>Loading product...</div>
  if (error) return <div>Error: {error}</div>
  if (!product) return <div>Product not found</div>

  return (
    <div className="product-page">
      <Navbar />
      <div className="product-container">
        <div className="product-left">
          <ProductGallery images={product.images} />
        </div>
        <div className="product-right">
          <h1>{product.name}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>

          <div className="product-sizes">
            <h3>Available Sizes:</h3>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button key={size} className="size-button">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="add-to-cart">Add to Cart</button>

          <ShareButtons product={product} />
        </div>
      </div>

      <ReviewSection productId={product._id} />
    </div>
  )
}

export default ProductPage