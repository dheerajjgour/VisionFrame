import React from 'react';
import Hero from '../components/HomeComponents/Hero';
import Features from '../components/HomeComponents/Features';
import Model from '../components/HomeComponents/Model';
import Partnership from '../components/HomeComponents/Partnership';
import ModelViewer from '../components/ModeViewer';
import Skills from '../components/HomeComponents/Skills';
import Testimonial from '../components/HomeComponents/Testimonial';
import Project from '../components/Project';
import FluidEffect from '../components/FluidEffect';
import SmoothScroll from '../components/SmoothScroll';
const Home = () => {
  return (
    <>
    <SmoothScroll>
      <FluidEffect />
        <Hero />
        <Features />
        <Project />
        <Partnership />
        <Testimonial />
        <Skills />
        <Model />
        </SmoothScroll>
    </>
  );
};


export default Home;
