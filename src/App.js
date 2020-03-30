import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from "styled-components";
import MainCanvas from './components/threejs/MainCanvas';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <MainCanvas />
  </>
);

export default App;