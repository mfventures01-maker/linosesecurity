import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './src/pages/HomePage';
import ProductPage from './src/pages/ProductPage';
import ProductListingPage from './src/pages/ProductListingPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solar-security-products" element={<ProductListingPage />} />
      <Route path="/products/:slug" element={<ProductPage />} />
    </Routes>
  );
};

export default App;