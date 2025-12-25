import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartNav.css';
import logo from '../assets/logo.jpg';

const CartNav = () => {
  const navigate = useNavigate();
  const { getTotalQuantity } = useCart();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="cart-nav">
      <div className="container">
        <div className="cart-navbar">
          <div className="logo" onClick={handleLogoClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleLogoClick(); }}>
            <img src={logo} alt="Panto Logo" />
            <h1>Panto</h1>
          </div>
          <div className="nav-icons">
            <div className="cart-icon" onClick={handleCartClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCartClick(); }}>
              <span>{getTotalQuantity()}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CartNav;

