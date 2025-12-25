import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartNav from '../components/CartNav';
import heroImage from '../assets/hero-bg.png';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const { getTotalPrice, clearCart } = useCart();
  const [selectedMethod, setSelectedMethod] = useState('');

  const paymentMethods = [
    { id: 'google-pay', name: 'Google Pay', icon: '💳' },
    { id: 'cash-on-delivery', name: 'Cash on Delivery', icon: '💵' },
    { id: 'paytm', name: 'Paytm', icon: '📱' },
    { id: 'upi', name: 'UPI', icon: '🔗' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
  ];

  const handleBackClick = () => {
    navigate('/order-summary');
  };

  const handlePaymentMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
  };

  const handlePay = () => {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="payment-page" style={{ backgroundImage: `url(${heroImage})` }}>
      <CartNav />
      <div className="container">
        <div className="payment-header">
          <button className="back-button" onClick={handleBackClick} aria-label="Go back">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="page-title">Payment</h1>
        </div>

        <div className="payment-content">
          <div className="payment-methods-section">
            <h2 className="section-title">Select Payment Method</h2>
            <div className="payment-methods">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`payment-method-card ${selectedMethod === method.id ? 'selected' : ''}`}
                  onClick={() => handlePaymentMethodSelect(method.id)}
                >
                  <div className="payment-method-icon">{method.icon}</div>
                  <div className="payment-method-name">{method.name}</div>
                  {selectedMethod === method.id && (
                    <div className="selected-check">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="payment-summary-section">
            <div className="payment-summary-card">
              <h2 className="summary-title">Payment Summary</h2>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="summary-row">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span>Total Amount</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
              <button
                className="pay-button"
                onClick={handlePay}
                disabled={!selectedMethod}
              >
                Pay ${getTotalPrice().toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

