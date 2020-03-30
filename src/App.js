import React, { Suspense } from "react";
import { createGlobalStyle } from "styled-components";
const MainCanvas = React.lazy(() => import("./components/threejs/MainCanvas"));

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Suspense fallback={<div>loading...</div>}>
      <MainCanvas />
    </Suspense>
  </>
);

export default App;
