// ModelViewer.jsx
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Model() {
  const modelRef = useRef();
  const gltf = useGLTF('/model/source/model.gltf');

  useEffect(() => {
    if (!modelRef.current) return;

    // Animate rotation on scroll
    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 4, // full 360° rotation
      scrollTrigger: {
        trigger: '.modelviewer',
        start: 'top center',
        end: 'bottom center',
        scrub: 2,
      },
      ease: 'none',
    });
  }, []);

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={1.5}
      position={[0, -1, 0]}
      rotation={[0, Math.PI, 0]} // starting rotation
    />
  );
}

function ModelViewer() {
  return (
    <Canvas style={{ height: '100vh' }} camera={{ position: [0, 0, 25], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 5]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

export default ModelViewer;
