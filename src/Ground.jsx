import { CuboidCollider,RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";

const WallModel = () => {
  const gltf = useGLTF("/wall.glb");
  return <primitive object={gltf.scene} />;
}

export const Ground = () => {
  return (
    <RigidBody type="fixed" colliders={false}>
      <WallModel />
      <CuboidCollider args={[500, 4, 500]} position={[0, -4, 0]}/>
    </RigidBody>
  );
}
