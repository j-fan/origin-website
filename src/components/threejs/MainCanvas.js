import React from "react";
import { Canvas } from "react-three-fiber";
import Box from "./Box";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
`;

const MainCanvas = () => {
  return (
    <StyledDiv>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </StyledDiv>
  );
};

export default MainCanvas;
