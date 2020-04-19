import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from "styled-components";
import MainCanvas from './components/threejs/MainCanvas';


const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: sans-serif;
    margin: 0;
    height:100vh;
    width: 100vw;
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
  </>
);

export default App;