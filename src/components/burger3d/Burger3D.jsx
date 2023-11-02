"use client";

// components/Burger.tsx
import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

const BurgerModel = () => {
  const { scene } = useLoader(GLTFLoader, "/burger/scene.gltf");
  const group = useRef();
  const { size } = useThree();
  const [isScreenWide, setIsScreenWide] = useState(size.width > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWide(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    // Dynamically scale based on screen width
    const scaleFactor = isScreenWide ? 1 : 0.95;
    group.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    group.current.position.y = isScreenWide ? -.8 : -1; // Adjust the value as needed
    group.current.rotation.y += Math.PI / 700;
  });

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={[68, 78, 68]}
        position={[-1.7, -3.5, -0.5]}
      />
    </group>
  );
};

const LoadingIndicator = () => (
  <Html center>
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Html>
);

const Burger = () => (
  <Suspense fallback={<LoadingIndicator />}>
    <BurgerModel />
  </Suspense>
);

const Burger3D = () => (
  <Canvas
    style={{ height: "100%", width: "100%" }}
    camera={{ position: [9, -1, -5] }}
  >
    <OrbitControls enablePan={false} enableZoom={false} />
    <pointLight
      position={[2, 1, 4]} // Right above the burger
      angle={0.9}
      penumbra={1}
      intensity={30} // Increase intensity for a stronger effect
      color="white" // Warm yellow color
    />
    <ambientLight intensity={2} />

    <pointLight
      position={[5, 8, 4]} // Right above the burger
      angle={0.3}
      penumbra={1}
      intensity={35} // Increase intensity for a stronger effect
      color="white" // Warm yellow color
    />
    <ambientLight intensity={0.7} color="#FFD700" />
    <Burger/>
  </Canvas>
);

export default Burger3D;
