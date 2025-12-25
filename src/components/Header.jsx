import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
import heroImage from '../assets/hero-bg.png';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Header = ({ setSearchTerm }) => {
  const navigate = useNavigate();
  const { getTotalQuantity } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = inputValue.trim();
    if (setSearchTerm && searchValue) {
      setSearchTerm(searchValue);
    } else if (setSearchTerm && !searchValue) {
      setSearchTerm('');
    }
    // Scroll to shop section
    setTimeout(() => {
      const shopSection = document.querySelector('#shop');
      if (shopSection) {
        const offset = 80;
        const elementPosition = shopSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Don't trigger search on every keystroke - only on submit
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const navLinks = [
    { name: 'Furniture', href: '#shop' },
    { name: 'Shop', href: '#shop' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Panto Logo" />
            <h1>Panto</h1>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href || '#'} 
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                  {link.dropdown && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginLeft: 'auto' }}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-icons">
            <div className="theme-toggle" onClick={toggleTheme} role="button" tabIndex={0}>
              {theme === 'light' ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 1v2" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21v2" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.22 4.22l1.42 1.42" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.36 18.36l1.42 1.42" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 12h2" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12h2" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.22 19.78l1.42-1.42" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.36 5.64l1.42-1.42" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <div className="cart-icon" onClick={handleCartClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCartClick(); }}>
              <span>{getTotalQuantity()}</span>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2>Make Your Interior More Minimalistic & Modern</h2>
          <p>
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
          <form className="search-bar" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search furniture" 
              value={inputValue} 
              onChange={handleInputChange}
            />
            <button type="submit" aria-label="Search">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="var(--text-color)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="var(--text-color)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;