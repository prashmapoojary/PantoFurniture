import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AddressProvider } from './context/AddressContext';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Cart from './pages/Cart';
import OrderSummary from './pages/OrderSummary';
import SelectDeliveryAddress from './pages/SelectDeliveryAddress';
import Payment from './pages/Payment';
import OrderConfirmation from './pages/OrderConfirmation';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AddressProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-summary" element={<OrderSummary />} />
              <Route path="/select-delivery-address" element={<SelectDeliveryAddress />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
            </Routes>
          </Router>
        </AddressProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;