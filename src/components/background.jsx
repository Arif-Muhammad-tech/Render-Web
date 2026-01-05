import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, mix } from "popmotion";
import "./background.css";
import { Color } from "three/src/Three.Core.js";
import * as THREE from "three";


const color = "#003cff65";


const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <boxGeometry args={[1, 1, 1]} />
    <meshBasicMaterial color="#000000ff"
      transparent={true}
      opacity={0.6}
      wireframe={true}/>

  </mesh>
);

const Star = ({ p }) => {
  const ref = useRef();

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(degreesToRadians(80), degreesToRadians(100), Math.random());
    const xAngle = degreesToRadians(360) * p;
    ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
  }, []);

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

function Scene({ numStars = 100 }) {
  const { scrollYProgress } = useScroll();
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      10 - scrollYProgress.get() * 7,
      scrollYProgress.get() * Math.PI,
      time.get() * 0.0005
    );
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <Icosahedron />
      {Array.from({ length: numStars }).map((_, i) => (
        <Star key={i} p={i / numStars} />
      ))}
    </>
  );
}

export default function Background() {
  return (
    <div className="bg-canvas">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

