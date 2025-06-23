import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Model() {
  const modelRef = useRef();
  const gltf = useGLTF('/model/source/model.gltf');

  useEffect(() => {
    if (!modelRef.current) return;

    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 2,
      scrollTrigger: {
        trigger: '.modelviewer',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
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
      rotation={[0, Math.PI, 0]}
    />
  );
}

function ModelViewer() {
  return (
    <Canvas style={{ height: '100vh' }} camera={{ position: [0, 0, 25], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

export default ModelViewer;
