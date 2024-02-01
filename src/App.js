import { PointerLockControls, Sky } from "@react-three/drei";
import { Ground } from "./Ground";
import { Physics, RigidBody } from "@react-three/rapier";
import { Player } from "./Player";

function App() {
  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1.5} />
      <Physics
        gravity={[0, -9.8, 0]}
        defaultContactMaterial={{
          friction: 1e-3,
          restitution: 0.5,
          contactEquationRelaxation: 2,
        }}
        allowSleep
        friction={1e-3}
        broadphase="SAP"
      >
        <Ground />
        <Player />
        <RigidBody>
          <mesh position={[0, 1, -5]}>
            <boxGeometry />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
}

export default App;
