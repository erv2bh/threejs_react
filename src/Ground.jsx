import { useGLTF } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";

const WallModel = () => {
  const gltf = useGLTF("/wall3.glb");
  console.log(gltf.scene.children);
  return <primitive object={gltf.scene} />;
}

export const Background = () => {
  const gltf = useGLTF("/wall3.glb");
  return (
    <>
      <primitive object={gltf.scene} />
      <CuboidCollider args={[500, 4, 500]} position={[0, -4, 0]}/>
    </>
  );
}
