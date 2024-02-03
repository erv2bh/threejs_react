import React, { useRef } from "react";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import anton from "./assets/fonts/Anton/Anton_Regular.json";

export const Sign = () => {
  const font = new FontLoader().parse(anton);
  extend({ TextGeometry });

  return (
    <mesh position={[-15, 20, -20]} castShadow>
      <textGeometry args={["Drop Red On Green", { font, size: 3, height: 0.1 }]} />
      <meshPhysicalMaterial
        attach="material"
        color="#000000"
      />
    </mesh>
  );
}
