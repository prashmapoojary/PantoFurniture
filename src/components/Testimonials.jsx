import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { motion, AnimatePresence } from 'framer-motion'; 

import bg1 from '../assets/review1.png'; 
import bg2 from '../assets/review2.png'; 
import bg3 from '../assets/review3.png'; 

import avatar1 from '../assets/avatar1.png'; 
import avatar2 from '../assets/avatar2.png'; 
import avatar3 from '../assets/avatar3.png'; 

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      bg: bg1,
      avatar: avatar1,
      name: "Bang Upin",
      role: "Pedagang Asongan",
      text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      rating: 4
    },
    {
      id: 2,
      bg: bg2,
      avatar: avatar2,
      name: "Ibuk Sukijan",
      role: "Ibu Rumah Tangga",
      text: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
      rating: 4
    },
    {
      id: 3,
      bg: bg3,
      avatar: avatar3,
      name: "Mpok Ina",
      role: "Karyawan Swasta",
      text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const renderStars = (count) => {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < count ? "star filled" : "star"}>★</span>
        ))}
      </>
    );
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        
        <div className="testi-header">
          <motion.span 
            className="testi-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            TESTIMONIALS
          </motion.span>
          
          <motion.h2 
            className="testi-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Client Reviews
          </motion.h2>
        </div>

        <div className="testi-carousel-wrapper">
          <button 
            className="nav-btn prev-btn mobile-only" 
            onClick={handlePrev}
            aria-label="Previous review"
          >
            ←
          </button>
          
          <div className="reviews-container">
            <div className="reviews-grid desktop-grid">
              {reviews.map((review, index) => (
                <motion.div 
                  key={review.id} 
                  className="review-card"
                  style={{ backgroundImage: `url(${review.bg})` }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="review-content-card">
                    <div className="avatar-wrapper">
                      <img src={review.avatar} alt={review.name} />
                    </div>

                    <h3 className="reviewer-name">{review.name}</h3>
                    <p className="reviewer-role">{review.role}</p>
                    
                    <p className="review-text">{review.text}</p>
                    
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mobile-carousel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="review-card mobile-card"
                  style={{ backgroundImage: `url(${reviews[currentIndex].bg})` }}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="review-content-card">
                    <div className="avatar-wrapper">
                      <img src={reviews[currentIndex].avatar} alt={reviews[currentIndex].name} />
                    </div>

                    <h3 className="reviewer-name">{reviews[currentIndex].name}</h3>
                    <p className="reviewer-role">{reviews[currentIndex].role}</p>
                    
                    <p className="review-text">{reviews[currentIndex].text}</p>
                    
                    <div className="review-rating">
                      {renderStars(reviews[currentIndex].rating)}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button 
            className="nav-btn next-btn mobile-only" 
            onClick={handleNext}
            aria-label="Next review"
          >
            →
          </button>

          <div className="carousel-dots mobile-only">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );

};

export default Testimonials;