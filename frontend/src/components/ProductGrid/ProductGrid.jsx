import { useEffect, useState } from 'react'
import { fetchProducts } from '../../services/api'
import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'

const ProductGrid = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts()
        setProducts(response.data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  if (loading) return <div>Loading products...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="product-grid">
      <h2>Our Collection</h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid