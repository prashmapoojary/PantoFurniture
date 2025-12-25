import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartNav from '../components/CartNav';
import heroImage from '../assets/hero-bg.png';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="order-confirmation-page" style={{ backgroundImage: `url(${heroImage})` }}>
      <CartNav />
      <div className="container">
        <div className="confirmation-content">
          <div className="confirmation-icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M8 12L11 15L16 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="confirmation-title">Order placed successfully!</h1>
          <p className="confirmation-message">
            Thank you for your order. We have received your order and will begin processing it right away.
            You will receive a confirmation email shortly.
          </p>
          <button className="continue-shopping-button" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

