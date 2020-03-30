import React from "react";
import { useThree, useFrame } from "react-three-fiber";

const SceneSettings = ({ envMap }) => {
  const { scene } = useThree();
  useFrame(() => {
    if (scene.background == null) {
      scene.background = envMap;
    }
  });
  return null;
};

export default SceneSettings;
