import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion'; 

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        
        <motion.div 
          className="footer-top"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          
          <motion.div className="footer-col brand-col" variants={itemVariants}>
            <h2 className="footer-logo">Panto</h2>
            <p className="footer-desc">
              The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
            </p>
          </motion.div>

          <motion.div className="footer-col" variants={itemVariants}>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#">Email Marketing</a></li>
              <li><a href="#">Campaigns</a></li>
              <li><a href="#">Branding</a></li>
            </ul>
          </motion.div>

          <motion.div className="footer-col" variants={itemVariants}>
            <h4 className="footer-heading">Furniture</h4>
            <ul className="footer-links">
              <li><a href="#">Beds</a></li>
              <li><a href="#">Chair</a></li>
              <li><a href="#">All</a></li>
            </ul>
          </motion.div>

          <motion.div className="footer-col" variants={itemVariants}>
            <h4 className="footer-heading">Follow Us</h4>
            <ul className="footer-socials">
              <li>
                <a href="#">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="copyright">Copyright © 2021</p>
          <div className="footer-legal">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;