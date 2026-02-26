import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './src/pages/HomePage';
import ProductPage from './src/pages/ProductPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:slug" element={<ProductPage />} />
    </Routes>
  );
};

export default App;