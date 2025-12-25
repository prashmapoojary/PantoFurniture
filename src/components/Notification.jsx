import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Notification.css';
import { motion, AnimatePresence } from 'framer-motion';

const Notification = ({ message, onClose, showGoToCart = false }) => {
  const navigate = useNavigate();

  const handleGoToCart = () => {
    onClose();
    navigate('/cart');
  };

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="notification"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p>{message}</p>
          <div className="notification-actions">
            {showGoToCart && (
              <button onClick={handleGoToCart} className="go-to-cart-btn" aria-label="Go to cart">
                Go to Cart
              </button>
            )}
            <button onClick={onClose} className="close-btn" aria-label="Close notification">
              &times;
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
