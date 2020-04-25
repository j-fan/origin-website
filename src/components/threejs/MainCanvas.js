import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";

const StyledDiv = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MainCanvas = () => {
  let scene = useRef();
  let skyMap = useRef();
  let camera = useRef();
  let renderer = useRef();

  useEffect(() => {
    initScene();
    addLights();
    addCamera();
    initAndAttachCanvas();

    const cubeGeo = new THREE.BoxGeometry(2, 2, 2);
    const cube = instantiateGeometry(cubeGeo);
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const instantiateGeometry = (geometry) => {
    const material = new THREE.MeshPhysicalMaterial({
      envMap: skyMap,
      color: 0x0000ff,
      metalness: 1,
      roughness: 0,
      opacity: 0.5,
      side: THREE.DoubleSide,
      transparent: true,
      envMapIntensity: 1.5,
      premultipliedAlpha: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    return cube;
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
    const skyMapImages = "https://threejs.org/examples/textures/cube/Bridge2/";
    const urls = [
      skyMapImages + "posx.jpg",
      skyMapImages + "negx.jpg",
      skyMapImages + "posy.jpg",
      skyMapImages + "negy.jpg",
      skyMapImages + "posz.jpg",
      skyMapImages + "negz.jpg",
    ];
    skyMap = new THREE.CubeTextureLoader().load(urls);
    scene.background = skyMap;
    skyMap.mapping = THREE.CubeRefractionMapping;
  };

  const addLights = () => {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(100, 350, 250);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
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
