import './ShareButtons.css'

const ShareButtons = ({ product }) => {
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
    window.open(url, '_blank')
  }

  const shareOnTwitter = () => {
    const text = `Check out this ${product.name} at Perfume Shop!`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${window.location.href}`
    window.open(url, '_blank')
  }

  const shareOnPinterest = () => {
    const url = `https://pinterest.com/pin/create/button/?url=${window.location.href}&media=${product.images[0]}&description=${product.name}`
    window.open(url, '_blank')
  }

  return (
    <div className="share-buttons">
      <h4>Share this product:</h4>
      <div className="buttons-container">
        <button onClick={shareOnFacebook} className="facebook">
          Facebook
        </button>
        <button onClick={shareOnTwitter} className="twitter">
          Twitter
        </button>
        <button onClick={shareOnPinterest} className="pinterest">
          Pinterest
        </button>
      </div>
    </div>
  )
}

export default ShareButtons