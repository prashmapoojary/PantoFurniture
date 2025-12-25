import React, { useState, useEffect } from 'react';
import './Products.css';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

import chair1 from '../assets/chair1.png';
import chair2 from '../assets/chair2.png';
import chair3 from '../assets/chair3.png';
import chair4 from '../assets/chair4.png';
import chair5 from '../assets/Urban Lounge Chair.jpg';
import chair6 from '../assets/Classic Wingback Chair.jpg';
import chair7 from '../assets/Nordic Fabric Chair.jpg';
import chair8 from '../assets/Retro Pattern Accent Chair.jpg';
import bed1 from '../assets/bed1.jpg';
import bed2 from '../assets/bed2.jpg';
import bed3 from '../assets/bed3.jpg';
import bed5 from '../assets/CloudSoft Double Bed.jpg';
import bed6 from '../assets/Studio Platform Bed.jpg';
import bed7 from '../assets/Royal Panel Bed.jpg';
import bed8 from '../assets/Cozy Storage Bed.jpg';
import sofa1 from '../assets/sofa1.jpg';
import sofa2 from '../assets/sofa2.jpg';
import sofa3 from '../assets/sofa3.jpg';
import sofa4 from '../assets/sofa4.jpg';
import sofa5 from '../assets/Urban Loft Sofa.jpg';
import sofa6 from '../assets/Cloud Comfort Sofa.jpg';
import sofa7 from '../assets/Vintage Velvet Sofa.jpg';
import sofa8 from '../assets/Family Corner Sofa.jpg';
import lamp1 from '../assets/lamp1.jpg';
import lamp2 from '../assets/lamp2.jpg';
import lamp3 from '../assets/lamp3.jpg';
import lamp4 from '../assets/lamp4.jpg';
import lamp5 from '../assets/Retro Tripod Shade Lamp.jpg';
import lamp6 from '../assets/Slim LED Reading Lamp.jpg';
import lamp7 from '../assets/Bronze Vintage Table Lamp.jpg';
import lamp8 from '../assets/Soft Glow Nightstand Lamp.jpg';

const Products = ({ searchTerm, setSearchTerm, showNotification }) => {
  const { addToCart } = useCart();
  const categories = ['Chair', 'Beds', 'Sofa', 'Lamp'];
  const [activeCategory, setActiveCategory] = useState('Chair');
  const [showAll, setShowAll] = useState(false);
  
  const productsData = {
    Chair: [
      { id: 1, name: 'Sakarias Armchair', price: 392, image: chair1, category: 'Chair', rating: 5 },
      { id: 2, name: 'Baltsar Chair', price: 299, image: chair2, category: 'Chair', rating: 5 },
      { id: 3, name: 'Anjay Chair', price: 519, image: chair3, category: 'Chair', rating: 5 },
      { id: 4, name: 'Nyantuy Chair', price: 921, image: chair4, category: 'Chair', rating: 5 },
      { id: 17, name: 'Urban Lounge Chair', price: 340, image: chair5, category: 'Chair', rating: 4 },
      { id: 18, name: 'Classic Wingback Chair', price: 410, image: chair6, category: 'Chair', rating: 5 },
      { id: 19, name: 'Nordic Fabric Chair', price: 365, image: chair7, category: 'Chair', rating: 4 },
      { id: 20, name: 'Retro Pattern Accent Chair', price: 455, image: chair8, category: 'Chair', rating: 5 },
    ],
    Beds: [
      { id: 5, name: 'King Size Comfort', price: 850, image: bed1, category: 'Beds', rating: 5 },
      { id: 6, name: 'Minimalist Single', price: 420, image: bed2, category: 'Beds', rating: 4 },
      { id: 7, name: 'Luxury Queen', price: 990, image: bed3, category: 'Beds', rating: 5 },
      // { id: 8, name: 'Bunk Bed Wood', price: 600, image: bed4, category: 'Beds', rating: 4 },
      { id: 21, name: 'CloudSoft Double Bed', price: 720, image: bed5, category: 'Beds', rating: 5 },
      { id: 22, name: 'Studio Platform Bed', price: 510, image: bed6, category: 'Beds', rating: 4 },
      { id: 23, name: 'Royal Panel Bed', price: 1050, image: bed7, category: 'Beds', rating: 5 },
      { id: 24, name: 'Cozy Storage Bed', price: 880, image: bed8, category: 'Beds', rating: 4 },
    ],
    Sofa: [
      { id: 9, name: 'Modern Sectional', price: 1200, image: sofa1, category: 'Sofa', rating: 5 },
      { id: 10, name: 'Leather 2-Seater', price: 890, image: sofa2, category: 'Sofa', rating: 4 },
      { id: 11, name: 'Cozy Fabric Sofa', price: 750, image: sofa3, category: 'Sofa', rating: 5 },
      { id: 12, name: 'Lounge Recliner', price: 1100, image: sofa4, category: 'Sofa', rating: 5 },
      { id: 25, name: 'Urban Loft Sofa', price: 980, image: sofa5, category: 'Sofa', rating: 5 },
      { id: 26, name: 'Cloud Comfort Sofa', price: 1250, image: sofa6, category: 'Sofa', rating: 4 },
      { id: 27, name: 'Vintage Velvet Sofa', price: 1030, image: sofa7, category: 'Sofa', rating: 5 },
      { id: 28, name: 'Family Corner Sofa', price: 1380, image: sofa8, category: 'Sofa', rating: 5 },
    ],
    Lamp: [
      { id: 13, name: 'Nordic Table Lamp', price: 85, image: lamp1, category: 'Lamp', rating: 5 },
      { id: 14, name: 'Standing Floor Lamp', price: 150, image: lamp2, category: 'Lamp', rating: 4 },
      { id: 15, name: 'Bedside Light', price: 45, image: lamp3, category: 'Lamp', rating: 5 },
      { id: 16, name: 'Desk Reading Lamp', price: 65, image: lamp4, category: 'Lamp', rating: 5 },
      { id: 29, name: 'Retro Tripod Shade Lamp', price: 115, image: lamp5, category: 'Lamp', rating: 5 },
      { id: 30, name: 'Slim LED Reading Lamp', price: 70, image: lamp6, category: 'Lamp', rating: 4 },
      { id: 31, name: 'Bronze Vintage Table Lamp', price: 82, image: lamp7, category: 'Lamp', rating: 5 },
      { id: 32, name: 'Soft Glow Nightstand Lamp', price: 58, image: lamp8, category: 'Lamp', rating: 5 },
    ],
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  // This effect handles filtering and displaying products
  useEffect(() => {
    const searchLower = searchTerm?.toLowerCase().trim();
    let productsToShow = [];

    if (searchLower) {
      // If there's a search term, filter all products
      const allProducts = Object.values(productsData).flat();
      productsToShow = allProducts.filter(p => p.name.toLowerCase().includes(searchLower));
    } else {
      // Otherwise, show products from the active category
      productsToShow = productsData[activeCategory] || [];
    }

    setFilteredProducts(showAll ? productsToShow : productsToShow.slice(0, 4));
  }, [searchTerm, activeCategory, showAll, productsData]);

  // This effect handles navigation when a search term matches a category
  useEffect(() => {
    const searchLower = searchTerm?.toLowerCase().trim();
    if (searchLower) {
      const categoryMap = {
        'lamp': 'Lamp', 'lamps': 'Lamp', 'light': 'Lamp', 'lights': 'Lamp',
        'bed': 'Beds', 'beds': 'Beds',
        'sofa': 'Sofa', 'sofas': 'Sofa', 'couch': 'Sofa', 'couches': 'Sofa',
        'chair': 'Chair', 'chairs': 'Chair',
      };
      const targetCategory = categoryMap[searchLower];
      if (targetCategory) {
        if (activeCategory !== targetCategory) {
          setActiveCategory(targetCategory);
        }
        // Scroll to the shop section
        const shopSection = document.querySelector('#shop');
        if (shopSection) {
          const offset = 80;
          const elementPosition = shopSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
        // Clear the search term after navigation
        if (setSearchTerm) {
          setTimeout(() => setSearchTerm(''), 300);
        }
      }
    }
  }, [searchTerm, activeCategory, setSearchTerm]);

  const handleCategoryClick = (category) => {
    if (setSearchTerm) {
      setSearchTerm('');
    }
    setActiveCategory(category);
    setShowAll(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showNotification(`${product.name} is successfully added to cart`);
  };

  return (
    <section id="shop" className="products">
      <div className="container">
        <h2 className="products-title">Best Selling Product</h2>
        <div className="tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => {
              const stars = '★'.repeat(product.rating || 5);
              return (
                <motion.div
                  className="product-card"
                  key={product.id || `${product.category}-${product.name}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        console.error('Failed to load image:', product.image, product.name);
                        e.target.style.opacity = '0.5';
                      }}
                    />
                  </div>
                  <div className="product-info">
                    <p className="product-category">{product.category}</p>
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      <span>{stars}</span>
                    </div>
                    <div className="product-price">
                      <p>${product.price}</p>
                      <button className="add-to-cart" aria-label={`Add ${product.name} to cart`} onClick={() => handleAddToCart(product)}>
                        <svg
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
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="no-results">
              <p>No products available</p>
            </div>
          )}
        </div>
        <div className="view-all">
          {productsData[activeCategory] && productsData[activeCategory].length > 4 && (
            <button onClick={() => setShowAll(!showAll)} className="view-all-btn">
              {showAll ? 'Show Less' : 'View All'}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
              >
                <path
                  d="M5 12H19"
                  stroke="#E58411"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#E58411"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;