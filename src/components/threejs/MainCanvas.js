import React, { useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import Box from "./Box";
import SceneSettings from "./SceneSettings";
import styled from "styled-components";
import { CubeTextureLoader } from "three";

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
`;

const MainCanvas = () => {
  const r = "https://threejs.org/examples/textures/cube/Bridge2/";
  const imgArray = [
    r + "posx.jpg",
    r + "negx.jpg",
    r + "posy.jpg",
    r + "negy.jpg",
    r + "posz.jpg",
    r + "negz.jpg"
  ];
  const [envMap, setEnvMap] = useState();

  useEffect(() => {
    new CubeTextureLoader().load(imgArray, setEnvMap);
  }, []);

  return (
    <StyledDiv>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} envMap={envMap} />
        <Box position={[1.2, 0, 0]} envMap={envMap} />
        <SceneSettings envMap={envMap} />
      </Canvas>
    </StyledDiv>
  );
};

export default MainCanvas;
