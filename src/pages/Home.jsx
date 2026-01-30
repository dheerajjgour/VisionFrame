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
import RecentWork from '../components/RecentWork';
import Contact from '../components/Contact';
import Api from '../components/Api';
const Home = () => {
  return (
    <>
    <SmoothScroll>
      <FluidEffect />
        <Hero />
        <Features />
        <Partnership />
        <RecentWork/>
        <Testimonial />
        <Skills />
        <Model />
        <Contact/>
        </SmoothScroll>
    </>
  );
};


export default Home;
