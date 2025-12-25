import React from 'react';
import './Materials.css';
import { motion } from 'framer-motion';
import mat1 from '../assets/material1.png';
import mat2 from '../assets/material2.png';
import mat3 from '../assets/material3.png';

const Materials = () => {
  return (
    <section className="materials">
      <div className="container">
        <div className="materials-content">
          <div className="materials-gallery">
            <motion.img
              src={mat1}
              alt="Material 1"
              className="material-img-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={mat2}
              alt="Material 2"
              className="material-img-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={mat3}
              alt="Material 3"
              className="material-img-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div
            className="materials-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="subtitle">MATERIALS</p>
            <h2>Very Serious Materials For Making Furniture</h2>
            <p>
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price.
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
        </div>
      </div>
    </section>
  );
};

export default Materials;