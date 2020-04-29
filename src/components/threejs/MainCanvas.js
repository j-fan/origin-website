import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { makeNoise3D } from "open-simplex-noise";

const StyledDiv = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const noise3D = makeNoise3D(900);

const MainCanvas = () => {
  let scene = useRef();
  let skyMap = useRef();
  let camera = useRef();
  let renderer = useRef();
  let originLogoArray = useRef([]);

  let noiseXoffset = 0;
  let noiseYoffset = 0;
  let noiseZoffset = 0;
  const noiseScale = 0.1;

  useEffect(() => {
    initScene();
    addLights();
    addCamera();
    initAndAttachCanvas();
    loadOriginLogo();
    const animate = () => {
      originLogoArray.current.forEach((originLogo) => {
        noiseXoffset += 0.0003;
        noiseYoffset += 0.0003;
        noiseZoffset += 0.0003;
        const noise = noise3D(
          (originLogo.position.x + noiseXoffset) * noiseScale,
          (originLogo.position.y + noiseYoffset) * noiseScale,
          (originLogo.position.z + noiseZoffset) * noiseScale
        );
        originLogo.rotation.x = Math.sin(noise * Math.PI * 2);
        originLogo.rotation.y = Math.cos(noise * Math.PI * 2);
        originLogo.rotation.z = Math.sin(noise * Math.PI * 2);
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const loadOriginLogo = () => {
    const originLogoMaterial = new THREE.MeshPhysicalMaterial({
      envMap: skyMap,
      color: 0xffffff,
      metalness: 0,
      roughness: 0,
      opacity: 1,
      side: THREE.DoubleSide,
      transparent: false,
      envMapIntensity: 3,
      premultipliedAlpha: true,
    });

    const objLoader = new OBJLoader2();
    objLoader.load("resources/origin.obj", (object) => {
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = originLogoMaterial;
          child.scale.x = 0.2;
          child.scale.y = 0.2;
          child.scale.z = 0.2;
        }
      });

      const gridSize = 10;
      const spacing = 0.6;
      for (let i = 0; i < gridSize; i += 1) {
        for (let j = 0; j < gridSize; j += 1) {
          const instance = object.clone();
          instance.position.set(
            (i - gridSize / 2) * spacing,
            (j - gridSize / 2) * spacing,
            0
          );
          scene.add(instance);
          originLogoArray.current.push(instance);
        }
      }
      // scene.add(object);
    });
  };

  const resizeCanvasToDisplaySize = () => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (canvas.width !== width || canvas.height !== height) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      canvas.style.width = window.innerWidth;
    }
  };

  const initScene = () => {
    scene = new THREE.Scene();
    const skyMapImages = "img/dark-s_";
    const urls = [
      skyMapImages + "px.jpg",
      skyMapImages + "nx.jpg",
      skyMapImages + "py.jpg",
      skyMapImages + "ny.jpg",
      skyMapImages + "pz.jpg",
      skyMapImages + "nz.jpg",
    ];
    skyMap = new THREE.CubeTextureLoader().load(urls);
    scene.background = new THREE.Color(0xccccdc); //skyMap;
    skyMap.mapping = THREE.CubeRefractionMapping;
  };

  const addLights = () => {
    // const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    // directionalLight.position.set(100, 350, 250);
    // directionalLight.castShadow = true;
    // scene.add(directionalLight);

    // const ambientLight = new THREE.AmbientLight(0x1f4760, 1);
    // ambientLight.castShadow = true;
    // scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    RectAreaLightUniformsLib.init();
    const rectLight = new THREE.RectAreaLight(0xffffff, 2, 5, 5);
    rectLight.position.set(0, 5, 0);
    rectLight.rotateX(-90);
    scene.add(rectLight);
  };

  const addCamera = () => {
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
  };

  const initAndAttachCanvas = () => {
    const selfHtmlNode = document.getElementById("mainCanvas");
    renderer = new THREE.WebGLRenderer();
    selfHtmlNode.appendChild(renderer.domElement);
    renderer.setSize(selfHtmlNode.clientWidth, selfHtmlNode.clientHeight);
    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    window.addEventListener("resize", () => {
      resizeCanvasToDisplaySize();
    });
  };

  return <StyledDiv id="mainCanvas"></StyledDiv>;
};

export default MainCanvas;
