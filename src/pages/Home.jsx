import React from 'react';
import Hero from '../components/HomeComponents/Hero';
import Features from '../components/HomeComponents/Features';
import Model from '../components/HomeComponents/Model';
import Partnership from '../components/HomeComponents/Partnership';
import ModelViewer from '../components/ModeViewer';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
      <Hero />
       <Partnership/>
       <Skills/>
      <Features/>
      <Model/>
    </>
  );
};

export default Home;
