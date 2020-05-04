import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import MainCanvas from "./components/threejs/MainCanvas";

const GlobalStyle = createGlobalStyle`
  html, body {
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;500&display=swap');
    font-family: 'Noto Sans JP', sans-serif;
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
  p {
    line-height: 1.6;
    font-weight: 100;
  }
  a {
    color: #fff;
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
