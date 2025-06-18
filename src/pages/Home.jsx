import React from 'react';
import Hero from '../components/HomeComponents/Hero';
import Features from '../components/HomeComponents/Features';
import Model from '../components/HomeComponents/Model';
import Partnership from '../components/HomeComponents/Partnership';
import ModelViewer from '../components/ModeViewer';

const Home = () => {
  return (
    <>
      <Hero />
      <Features/>
      <Partnership/>
      <Model/>
    </>
  );
};

export default Home;
