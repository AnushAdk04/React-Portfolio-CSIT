import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Placeholder routes for now */}
          <Route path="about" element={<div className="p-10">About Page (Coming Soon)</div>} />
          <Route path="services" element={<div className="p-10">Services Page (Coming Soon)</div>} />
          <Route path="interests" element={<div className="p-10">Interests Page (Coming Soon)</div>} />
          <Route path="contact" element={<div className="p-10">Contact Page (Coming Soon)</div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;