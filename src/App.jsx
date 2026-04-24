import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Announcements from './pages/Announcements';
import About from './pages/About';
import Career from './pages/Career';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
