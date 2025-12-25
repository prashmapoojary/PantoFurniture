import React, { useState } from 'react';
import Header from '../components/Header';
import WhyUs from '../components/WhyUs';
import Products from '../components/Products';
import Experiences from '../components/Experiences';
import Materials from '../components/Materials';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Notification from '../components/Notification';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');

  const showNotification = (message) => {
    setNotificationMessage(message);
    setTimeout(() => {
      setNotificationMessage('');
    }, 3000);
  };

  return (
    <div className="App">
      <Notification 
        message={notificationMessage} 
        onClose={() => setNotificationMessage('')} 
        showGoToCart={notificationMessage.includes('added to cart')}
      />
      <Header setSearchTerm={setSearchTerm} />
      <WhyUs />
      <Products searchTerm={searchTerm} setSearchTerm={setSearchTerm} showNotification={showNotification} />
      <Experiences />
      <Materials />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

