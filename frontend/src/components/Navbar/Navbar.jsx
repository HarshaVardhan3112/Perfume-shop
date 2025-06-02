import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Perfume Shop
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Collections
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link cart-icon" onClick={() => setIsOpen(false)}>
              <FiShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar