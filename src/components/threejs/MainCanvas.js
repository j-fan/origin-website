import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { makeNoise3D } from "open-simplex-noise";
import {
  EffectComposer,
  EffectPass,
  RenderPass,
  NoiseEffect,
  BlendFunction,
  ChromaticAberrationEffect,
} from "postprocessing";
import { Clock } from "three";

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
  let clock = useRef();
  let composer = useRef();

  let noiseXoffset = 0;
  let noiseYoffset = 0;
  let noiseZoffset = 0;
  const noiseScale = 0.1;

  useEffect(() => {
    initScene();
    initAndAttachCanvas();
    addCamera();
    loadOriginLogo();
    loadPlane();
    addLights();
    addPostProcessing();

    const animate = () => {
      originLogoArray.current.forEach((originLogo) => {
        noiseXoffset += 0.0002;
        noiseYoffset += 0.0002;
        noiseZoffset += 0.0002;
        const noise = noise3D(
          (originLogo.position.x + noiseXoffset) * noiseScale,
          (originLogo.position.y + noiseYoffset) * noiseScale,
          (originLogo.position.z + noiseZoffset) * noiseScale
        );
        originLogo.rotation.x = Math.sin(noise * Math.PI * 2);
        originLogo.rotation.y = Math.cos(noise * Math.PI * 2);
        originLogo.rotation.z = Math.sin(noise * Math.PI * 2);
      });

      camera.rotation.z += 0.001;

      composer.render(clock.getDelta());
      // renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const addPostProcessing = () => {
    composer = new EffectComposer(renderer);

    const noiseEffect = new NoiseEffect({
      blendFunction: BlendFunction.COLOR_DODGE,
    });
    noiseEffect.blendMode.opacity.value = 0.05;

    const chromaticAbberationEffect = new ChromaticAberrationEffect({
      offset: new THREE.Vector2(0.001, 0.003),
    });

    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new EffectPass(camera, noiseEffect));
    composer.addPass(new EffectPass(camera, chromaticAbberationEffect));

    clock = new Clock();
  };

  const loadPlane = () => {
    const planeMaterial = new THREE.MeshPhysicalMaterial({
      envMap: skyMap,
      color: 0x111111,
      metalness: 0,
      roughness: 0.6,
      opacity: 1,
      side: THREE.DoubleSide,
      transparent: false,
      envMapIntensity: 3,
      premultipliedAlpha: true,
    });
    const geometry = new THREE.PlaneBufferGeometry(40, 40);
    const planeMesh = new THREE.Mesh(geometry, planeMaterial);
    planeMesh.position.z = -1;
    planeMesh.receiveShadow = true;
    scene.add(planeMesh);
  };

  const loadOriginLogo = () => {
    const originLogoMaterial = new THREE.MeshPhysicalMaterial({
      envMap: skyMap,
      color: 0x252525,
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
          child.scale.set(0.25, 0.25, 0.25);
          child.castShadow = true;
        }
      });

      const gridSize = 11;
      const spacing = 0.8;
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
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    RectAreaLightUniformsLib.init();
    const rectLight = new THREE.RectAreaLight(0xffffff, 10, 5, 5);
    rectLight.position.set(5, 15, 10);
    rectLight.rotateX(-45);
    scene.add(rectLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6, 100);
    directionalLight.position.set(0, 5, 10);
    scene.add(directionalLight);
    directionalLight.castShadow = true;
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.height = 256;
    directionalLight.shadow.mapSize.wdith = 256;
    directionalLight.shadow.camera = new THREE.OrthographicCamera(
      -6,
      6,
      6,
      -6,
      8,
      20
    );
    // const cameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
    // scene.add(cameraHelper);
  };

  const addCamera = () => {
    camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // camera.position.set(-1.5, -4, 2);
    // camera.rotation.set(0.5, 0, 0.5);
    camera.position.set(-0.3, 0, 3.5);
  };

  const initAndAttachCanvas = () => {
    const selfHtmlNode = document.getElementById("mainCanvas");
    renderer = new THREE.WebGLRenderer();
    selfHtmlNode.appendChild(renderer.domElement);
    renderer.setSize(selfHtmlNode.clientWidth, selfHtmlNode.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

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
