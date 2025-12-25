import React, { createContext, useContext, useState, useEffect } from 'react';

const AddressContext = createContext();

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error('useAddress must be used within an AddressProvider');
  }
  return context;
};

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState(() => {
    const savedAddresses = localStorage.getItem('pantoAddresses');
    return savedAddresses ? JSON.parse(savedAddresses) : [];
  });

  const [selectedAddress, setSelectedAddress] = useState(() => {
    const savedSelected = localStorage.getItem('pantoSelectedAddress');
    return savedSelected ? JSON.parse(savedSelected) : null;
  });

  useEffect(() => {
    localStorage.setItem('pantoAddresses', JSON.stringify(addresses));
  }, [addresses]);

  useEffect(() => {
    if (selectedAddress) {
      localStorage.setItem('pantoSelectedAddress', JSON.stringify(selectedAddress));
    }
  }, [selectedAddress]);

  const addAddress = (address) => {
    const newAddress = {
      ...address,
      id: Date.now().toString(),
    };
    setAddresses(prev => [...prev, newAddress]);
    return newAddress;
  };

  const updateAddress = (id, updatedAddress) => {
    setAddresses(prev =>
      prev.map(addr => addr.id === id ? { ...updatedAddress, id } : addr)
    );
    if (selectedAddress?.id === id) {
      setSelectedAddress({ ...updatedAddress, id });
    }
  };

  const deleteAddress = (id) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
    if (selectedAddress?.id === id) {
      setSelectedAddress(null);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        addresses,
        selectedAddress,
        setSelectedAddress,
        addAddress,
        updateAddress,
        deleteAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

