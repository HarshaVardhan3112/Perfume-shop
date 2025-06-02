import { useState } from 'react'
import './ProductGallery.css'

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={mainImage} alt="Main product" />
      </div>
      <div className="thumbnail-container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumbnail ${mainImage === img ? 'active' : ''}`}
            onClick={() => setMainImage(img)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery