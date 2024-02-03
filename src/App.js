import { Sky , OrbitControls } from "@react-three/drei";
import { Background } from "./Ground";
import { Physics, RigidBody } from "@react-three/rapier";
import { extend, useFrame } from "react-three-fiber";

import { Sign } from "./Sign";
import { useRef, useState } from "react";
import { useThree } from "react-three-fiber";
import { useDrag } from "@use-gesture/react";

function App() {
  const ref = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const [isDropping, setIsDropping] = useState(false);

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const bind = useDrag(({ offset: [x, y], down }) => {
    const [, , z] = position;

    console.log(x, -y);

    if (down) {
      setPosition([x / aspect, -y / aspect, z]);
    } else {
      setIsDropping(true);

      console.log("드래그 시",position);
    }
  },{ from: [0, 0, 0], filterTaps: true });

  console.log(isDropping);

  useFrame(() => {
    if (isDropping) {
      const [currentX, currentY, currentZ] = position;

      console.log("드롭 중: ", position);

      const descentVelocity = 0.4;
      setPosition([currentX, currentY - descentVelocity, currentZ]);

      if (position[1] < 0) {
        setIsDropping(false);
      }
    }
  });
  return (
    <>
     <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1} />
      <Physics
        // gravity={[0, -9.8, 0]}
        // defaultContactMaterial={{
        //   friction: 1e-3,
        //   restitution: 0.5,
        //   contactEquationRelaxation: 2,
        // }}
        // allowSleep
        // friction={1e-3}
        // broadphase="SAP"
      >
        <RigidBody type="fixed" colliders={false}>
          <Background />
        </RigidBody>
        <Sign />
        <RigidBody type="dynamic" mass={1}>
          <mesh position={position} ref={ref} {...bind()}>
            <boxGeometry args={[5,5,5]} />
            <meshStandardMaterial color={"red"} />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
}

export default App;
