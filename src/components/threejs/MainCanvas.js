import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
`;

const MainCanvas = () => {
  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var r = "https://threejs.org/examples/textures/cube/Bridge2/";
    var urls = [
      r + "posx.jpg",
      r + "negx.jpg",
      r + "posy.jpg",
      r + "negy.jpg",
      r + "posz.jpg",
      r + "negz.jpg"
    ];
    var skyMap = new THREE.CubeTextureLoader().load(urls);
    scene.background = skyMap;
    skyMap.mapping = THREE.CubeRefractionMapping;

    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(100, 350, 250);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var selfElement = document.getElementById("mainCanvas");
    var renderer = new THREE.WebGLRenderer();
    selfElement.appendChild(renderer.domElement);
    renderer.setSize(selfElement.clientWidth, selfElement.clientHeight);

    var geometry = new THREE.BoxGeometry(2, 2, 2);
    var material = new THREE.MeshPhysicalMaterial({
      envMap: skyMap,
      color: 0xffffff,
      metalness: 1,
      roughness: 0,
      opacity: 0.5,
      side: THREE.BackSide,
      transparent: true,
      envMapIntensity: 1.5,
      premultipliedAlpha: true
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    var animate = function() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }, []);
  return <StyledDiv id="mainCanvas"></StyledDiv>;
};

export default MainCanvas;
