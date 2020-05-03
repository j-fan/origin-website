import React, { useState } from "react";
import styled from "styled-components";
import HomeNavItem from "../components/HomeNavItem";
import HomeTitle from "../components/HomeTitle";
import Events from "./Events";
import Gallery from "./Gallery";
import About from "./About";

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  pointer-events: none;
`;

const screens = {
  home: 0,
  about: 1,
  gallery: 2,
  events: 3,
};

const HomeScreenOverlay = ({ setScreen, isCurrentScreen }) => {
  return (
    <StyledDiv>
      <HomeNavItem
        text="Home"
        direction="top"
        onClick={setScreen(screens.home)}
        isVisible={!isCurrentScreen(screens.home)}
      />
      <HomeNavItem
        text="Events"
        direction="bottom"
        onClick={setScreen(screens.events)}
        isVisible={!isCurrentScreen(screens.events)}
      />
      <HomeNavItem
        text="About"
        direction="left"
        onClick={setScreen(screens.about)}
        isVisible={!isCurrentScreen(screens.about)}
      />
      <HomeNavItem
        text="Gallery"
        direction="right"
        onClick={setScreen(screens.gallery)}
        isVisible={!isCurrentScreen(screens.gallery)}
      />
    </StyledDiv>
  );
};

const Home = () => {
  const [currentScreen, setcurrentScreen] = useState(screens.home);
  const isCurrentScreen = (screen) => currentScreen == screen;
  const setScreen = (screen) => {
    return () => {
      if (currentScreen == screen) {
        setcurrentScreen(screens.home);
      } else {
        setcurrentScreen(screen);
      }
    };
  };

  return (
    <>
      <HomeScreenOverlay
        setScreen={setScreen}
        isCurrentScreen={isCurrentScreen}
      />
      <About isVisible={isCurrentScreen(screens.about)} direction="left" />
      <Gallery isVisible={isCurrentScreen(screens.gallery)} direction="right" />
      <Events isVisible={isCurrentScreen(screens.events)} direction="bottom" />
      <HomeTitle />
    </>
  );
};

export default Home;
