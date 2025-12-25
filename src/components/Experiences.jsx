import React from 'react';
import './Experiences.css';
import { motion } from 'framer-motion';
import experienceImg from '../assets/experience.png';

const Experiences = () => {
  return (
    <section className="experience">
      <div className="container">
        <div className="experience-content">
          <motion.div
            className="experience-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="subtitle">EXPERIENCES</p>
            <h2>We Provide You The Best Experience</h2>
            <p>
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and luxurious style and with premium quality
              materials.
            </p>
            <a href="#">
              More Info
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </a>
          </motion.div>
          <motion.div
            className="group relative w-full h-96 overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform -translate-x-2 -translate-y-2" />
            <img 
              src={experienceImg} 
              alt="Living room with modern furniture" 
              className="relative w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-out group-hover:scale-105 shadow-lg group-hover:shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;