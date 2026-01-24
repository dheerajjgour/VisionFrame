// src/components/FluidEffect.jsx
import React from 'react';
import FluidSimulation from 'fluid-simulation-react';

const FluidEffect = () => {
  return (
    <section className='fluid'>
    <FluidSimulation
      config={{
        textureDownsample: 2,
        densityDissipation: 0.96,
        velocityDissipation: 0.99,
        pressureIterations: 20,
        curlStrength: 50,
        splatRadius: 0.008
      }}
      color={[
        [1, 0.2, 0.6],   // Pink
        [0.2, 0.8, 1.0], // Cyan
        [1.0, 1.0, 0.2], // Yellow
      ]}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
    </section>
  );
};

export default FluidEffect;
