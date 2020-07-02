import React, { useState } from "react";
import styled from "styled-components";
import HomeNavItem from "../components/HomeNavItem";
import HomeTitle from "../components/HomeTitle";
import Events from "./Events";
import Gallery from "./Gallery";
import About from "./About";
import Radio from "./Radio";
import { Router, Location } from "@reach/router";
import { AnimatePresence } from "framer-motion";
import MainCanvas from "../components/threejs/MainCanvas";

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
  home: "/",
  about: "/about",
  gallery: "/gallery",
  events: "/events",
  radio: "/radio",
};

const HomeScreenOverlay = ({ currentScreen }) => {
  return (
    <StyledDiv>
      <HomeNavItem
        text="Home"
        direction="top"
        isVisible={currentScreen !== screens.home}
        to={screens.home}
      />
      {/* <HomeNavItem
        text="Events"
        direction="bottom"
        isVisible={currentScren !== screens.events}
        to={screens.events}
      /> */}
      <HomeNavItem
        text="Radio"
        direction="bottom"
        isVisible={currentScreen !== screens.radio}
        to={screens.radio}
      />
      <HomeNavItem
        text="About"
        direction="left"
        isVisible={currentScreen !== screens.about}
        to={screens.about}
      />
      <HomeNavItem
        text="Gallery"
        direction="right"
        isVisible={currentScreen !== screens.gallery}
        to={screens.gallery}
      />
    </StyledDiv>
  );
};

const Home = () => {
  return (
    <Location>
      {({ location }) => (
        <>
          <HomeScreenOverlay currentScreen={location.pathname} />
          <MainCanvas isVisible={location.pathname === screens.home} />
          <AnimatePresence>
            <Router location={location} key={location.pathname}>
              <About
                isVisible={location.pathname === screens.about}
                direction="left"
                path={screens.about}
              />
              <Gallery
                isVisible={location.pathname === screens.gallery}
                direction="right"
                path={screens.gallery}
              />
              <Events
                isVisible={location.pathname === screens.events}
                direction="bottom"
                path={screens.events}
              />
              <Radio
                isVisible={location.pathname === screens.radio}
                direction="bottom"
                path={screens.radio}
              />
            </Router>
          </AnimatePresence>
          <HomeTitle />
        </>
      )}
    </Location>
  );
};

export default Home;
