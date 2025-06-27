// src/components/FluidEffect.jsx
import React, { useRef, useEffect } from 'react';
import FluidSimulation from 'fluid-simulation-react';

const FluidEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Make the canvas ignore pointer events for itself but pass through to elements below
      const canvas = containerRef.current.querySelector('canvas');
      if (canvas) {
        canvas.style.pointerEvents = 'none';
        canvas.style.mixBlendMode = 'screen'; // Creates nice blending with content
      }
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.7 // Adjust transparency
      }}
    >
      <FluidSimulation
        config={{
          textureDownsample: 1,
          densityDissipation: 0.98,
          velocityDissipation: 0.99,
          pressureIterations: 25,
          curlStrength: 35,
          splatRadius: 0.01,
          transparent: true
        }}
        interactive={true}
        color={[
          [0.2, 0.6, 0.9], // Cool blue
          [0.9, 0.3, 0.6], // Pink
          [0.1, 0.8, 0.8], // Teal
        ]}
      />
    </div>
  );
};

export default FluidEffect;