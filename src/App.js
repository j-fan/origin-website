import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Routes from "./Routes";
import { Location } from "@reach/router";

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
    <Location>
      {({ location }) => (
        <>
          <Home location={location} />
          <Routes location={location} />
        </>
      )}
    </Location>
  </>
);

export default App;
