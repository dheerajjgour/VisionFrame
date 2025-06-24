import React from 'react';
import Hero from '../components/HomeComponents/Hero';
import Features from '../components/HomeComponents/Features';
import Model from '../components/HomeComponents/Model';
import Partnership from '../components/HomeComponents/Partnership';
import ModelViewer from '../components/ModeViewer';
import Skills from '../components/HomeComponents/Skills';
import Testimonial from '../components/HomeComponents/Testimonial';

const Home = () => {
  return (
    <>
      <Hero />
       <Partnership/>
       <Skills/>
       <Testimonial/>
      <Features/>
      <Model/>
    </>
  );
};

export default Home;
