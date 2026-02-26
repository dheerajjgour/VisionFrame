import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll'; 
import './App.css';
import FluidEffect from './components/FluidEffect';
import Toggle from './components/Toggle';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toggle/>
      <div className='feedback'>
      <FeedbackForm/>
      </div>
      
      <Footer />
    </>
  );
  
}

export default App;
