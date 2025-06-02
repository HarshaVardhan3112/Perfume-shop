import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`}>
        <div className="product-image">
          <img src={product.images[0]} alt={product.name} />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="product-description">
            {product.description.substring(0, 60)}...
          </p>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard