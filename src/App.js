import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import MainCanvas from "./components/threejs/MainCanvas";

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: sans-serif;
    margin: 0;
    height:100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    background-color: #000;
  }
  #App {
    height: 100%;
    width: 100%;   
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <MainCanvas />
    <Home />
  </>
);

export default App;
