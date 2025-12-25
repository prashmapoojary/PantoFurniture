import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddress } from '../context/AddressContext';
import CartNav from '../components/CartNav';
import heroImage from '../assets/hero-bg.png';
import './SelectDeliveryAddress.css';

const SelectDeliveryAddress = () => {
  const navigate = useNavigate();
  const { addresses, selectedAddress, setSelectedAddress, addAddress } = useAddress();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleBackClick = () => {
    navigate('/order-summary');
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    navigate('/order-summary');
  };

  const handleAddNew = () => {
    setShowAddForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddress = addAddress(formData);
    setSelectedAddress(newAddress);
    setShowAddForm(false);
    setFormData({
      name: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
    });
    navigate('/order-summary');
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setFormData({
      name: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
    });
  };

  return (
    <div className="select-address-page" style={{ backgroundImage: `url(${heroImage})` }}>
      <CartNav />
      <div className="container">
        <div className="address-page-header">
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
          <h1 className="page-title">Select delivery address</h1>
        </div>

        {!showAddForm ? (
          <>
            <div className="address-list">
              {addresses.length > 0 ? (
                addresses.map((address) => (
                  <div
                    key={address.id}
                    className={`address-card ${selectedAddress?.id === address.id ? 'selected' : ''}`}
                    onClick={() => handleSelectAddress(address)}
                  >
                    <div className="address-card-header">
                      <h3 className="address-card-name">{address.name}</h3>
                      {selectedAddress?.id === address.id && (
                        <span className="selected-badge">Selected</span>
                      )}
                    </div>
                    <p className="address-card-phone">{address.phone}</p>
                    <p className="address-card-address">{address.address}</p>
                    <p className="address-card-location">
                      {address.city}, {address.state} - {address.pincode}
                    </p>
                    <button
                      className="select-address-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectAddress(address);
                      }}
                    >
                      Deliver to this address
                    </button>
                  </div>
                ))
              ) : (
                <div className="no-addresses">
                  <p>No saved addresses</p>
                  <p className="no-addresses-subtitle">Add a new address to continue</p>
                </div>
              )}
            </div>

            <div className="add-address-section">
              <button className="add-new-button" onClick={handleAddNew}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add New
              </button>
            </div>
          </>
        ) : (
          <div className="add-address-form-container">
            <h2 className="form-title">Add New Address</h2>
            <form className="add-address-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Full Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your full address"
                  rows="3"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter city"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Enter state"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="Enter pincode"
                  required
                />
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-button" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="save-button">
                  Save Address
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDeliveryAddress;

