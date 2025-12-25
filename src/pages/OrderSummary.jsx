import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAddress } from '../context/AddressContext';
import CartNav from '../components/CartNav';
import heroImage from '../assets/hero-bg.png';
import './OrderSummary.css';

const OrderSummary = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice } = useCart();
  const { selectedAddress, setSelectedAddress } = useAddress();
  const [shippingDetails, setShippingDetails] = useState({
    name: selectedAddress?.name || '',
    phone: selectedAddress?.phone || '',
    email: '',
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleBackClick = () => {
    navigate('/cart');
  };

  const handleChangeAddress = () => {
    navigate('/select-delivery-address');
  };

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'shipping') {
      setShippingDetails(prev => ({ ...prev, [name]: value }));
    } else if (section === 'payment') {
      setPaymentDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePayAmount = () => {
    if (!selectedAddress) {
      alert('Please select a delivery address');
      return;
    }
    navigate('/payment');
  };

  // Update shipping details when address changes
  React.useEffect(() => {
    if (selectedAddress) {
      setShippingDetails(prev => ({
        ...prev,
        name: selectedAddress.name || prev.name,
        phone: selectedAddress.phone || prev.phone,
      }));
    }
  }, [selectedAddress]);

  return (
    <div className="order-summary-page" style={{ backgroundImage: `url(${heroImage})` }}>
      <CartNav />
      <div className="container">
        <div className="order-summary-header">
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
          <h1 className="page-title">Order Summary</h1>
        </div>

        <div className="order-summary-content">
          <div className="order-summary-left">
            {/* Order Details */}
            <div className="order-section">
              <h2 className="section-title">Order Details</h2>
              <div className="order-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="order-item">
                    <div className="order-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="order-item-info">
                      <h3 className="order-item-name">{item.name}</h3>
                      <p className="order-item-category">{item.category}</p>
                      <div className="order-item-meta">
                        <span className="order-item-quantity">Qty: {item.quantity}</span>
                        <span className="order-item-price">${item.price} each</span>
                      </div>
                    </div>
                    <div className="order-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="order-section">
              <div className="section-header">
                <h2 className="section-title">Deliver to:</h2>
                <button className="change-button" onClick={handleChangeAddress}>
                  Change
                </button>
              </div>
              {selectedAddress ? (
                <div className="delivery-address-display">
                  <p className="address-name">{selectedAddress.name}</p>
                  <p className="address-phone">{selectedAddress.phone}</p>
                  <p className="address-full">{selectedAddress.address}</p>
                  <p className="address-location">
                    {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}
                  </p>
                </div>
              ) : (
                <div className="no-address">
                  <p>No address selected</p>
                  <button className="add-address-button" onClick={handleChangeAddress}>
                    + Add Address
                  </button>
                </div>
              )}
            </div>

            {/* Shipping Details Form */}
            <div className="order-section">
              <h2 className="section-title">Shipping Details</h2>
              <form className="shipping-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={shippingDetails.name}
                    onChange={(e) => handleInputChange(e, 'shipping')}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={shippingDetails.phone}
                    onChange={(e) => handleInputChange(e, 'shipping')}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={shippingDetails.email}
                    onChange={(e) => handleInputChange(e, 'shipping')}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </form>
            </div>

            {/* Payment Details */}
            <div className="order-section">
              <h2 className="section-title">Payment Details</h2>
              <form className="payment-form">
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={(e) => handleInputChange(e, 'payment')}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardName">Cardholder Name</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={paymentDetails.cardName}
                    onChange={(e) => handleInputChange(e, 'payment')}
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={paymentDetails.expiryDate}
                      onChange={(e) => handleInputChange(e, 'payment')}
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={paymentDetails.cvv}
                      onChange={(e) => handleInputChange(e, 'payment')}
                      placeholder="123"
                      maxLength="3"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="order-summary-right">
            <div className="summary-card">
              <h2 className="summary-title">Order Summary</h2>
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
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
              <button className="pay-amount-button" onClick={handlePayAmount}>
                Pay Amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

