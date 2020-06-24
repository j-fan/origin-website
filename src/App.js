import React from "react";
import { createGlobalStyle } from "styled-components";
import Gallery from "./pages/Gallery";

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: sans-serif;
    margin: 0;
    position: relative;
    background-color: #000;
    width: 100%
  }
  #App {
    height: auto;
    width: 100%;
    overflow-x:hidden;   
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
    <Gallery isVisible={true} direction={"right"} />
  </>
);

export default App;
