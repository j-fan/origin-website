import React, { useState } from "react";
import styled from "styled-components";
import HomeNavItem from "../components/HomeNavItem";
import Events from "./Events";
import Gallery from "./Gallery";
import About from "./About";

const StyledDiv = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

const screens = {
  home: 0,
  about: 1,
  gallery: 2,
  events: 3,
};

const HomeScreenOverlay = ({ setScreen, isHomePage }) => (
  <StyledDiv>
    <HomeNavItem
      text="Home"
      direction="top"
      onClick={setScreen(screens.home)}
    />
    <HomeNavItem
      text="Events"
      direction="bottom"
      onClick={setScreen(screens.events)}
    />
    <HomeNavItem
      text="About"
      direction="left"
      onClick={setScreen(screens.about)}
    />
    <HomeNavItem
      text="Gallery"
      direction="right"
      onClick={setScreen(screens.gallery)}
    />
  </StyledDiv>
);

const Home = () => {
  const [currentScreen, setcurrentScreen] = useState(screens.home);

  const setScreen = (screen) => {
    return () => {
      if (currentScreen == screen) {
        setcurrentScreen(screens.home);
      } else {
        setcurrentScreen(screen);
      }
    };
  };

  const isScreenVisible = (screen) => currentScreen == screen;

  return (
    <>
      <HomeScreenOverlay setScreen={setScreen} />
      <About isVisible={isScreenVisible(screens.about)} />
      <Gallery isVisible={isScreenVisible(screens.gallery)} />
      <Events isVisible={isScreenVisible(screens.events)} />
    </>
  );
};

export default Home;
