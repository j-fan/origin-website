import React, { useRef, useState } from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";

const Box = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
        envMap={props.envMap}
        metalness={1}
        roughness={0}
        opacity={0.5}
        side={THREE.DoubleSide}
        transparent={true}
        envMapIntensity={1.5}
        premultipliedAlpha={true}
      />
    </mesh>
  );
};

export default Box;
