import React from 'react';
import './WhyUs.css';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const features = [
    {
      title: 'Luxury facilities',
      description: 'The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.',
    },
    {
      title: 'Affordable Price',
      description: 'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.',
    },
    {
      title: 'Many Choices',
      description: 'We provide many unique work space choices so that you can choose the workspace to your liking.',
    },
  ];

  return (
    <section id="about-us" className="why-us-section">
      <div className="container">
        <div className="why-us-content">
          <motion.div
            className="why-us-title-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Why <br /> Choosing Us</h2>
          </motion.div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                className="feature-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#">
                  More Info
                  <span className="arrow">⟶</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;