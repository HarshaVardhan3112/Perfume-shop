import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HeroBanner />
      <ProductGrid />
    </div>
  )
}

export default HomePage