import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2";

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
  let originLogo = useRef();

  useEffect(() => {
    initScene();
    addLights();
    addCamera();
    initAndAttachCanvas();
    loadOriginLogo();
    const animate = () => {
      if (originLogo.rotation != null) {
        originLogo.rotation.x += 0.01;
        originLogo.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const loadOriginLogo = () => {
    const originLogoMaterial = new THREE.MeshPhysicalMaterial({
      envMap: skyMap,
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0,
      opacity: 1,
      side: THREE.DoubleSide,
      transparent: false,
      envMapIntensity: 3,
      premultipliedAlpha: true,
    });

    const objLoader = new OBJLoader2();
    objLoader.load("resources/origin.obj", (object) => {
      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material = originLogoMaterial;
          child.scale.x = 1.5;
          child.scale.y = 1.5;
          child.scale.z = 1.5;
        }
      });
      originLogo = object;
      scene.add(object);
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
