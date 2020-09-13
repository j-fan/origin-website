import React from "react";
import styled from "styled-components";
import HomeNavItem from "../components/HomeNavItem";
import HomeTitle from "../components/HomeTitle";
import MainCanvas from "../components/threejs/MainCanvas";
import { paths } from "../Routes";

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  pointer-events: none;
`;

const HomeScreenOverlay = ({ currentScreen }) => {
  return (
    <StyledDiv>
      <HomeNavItem
        text="Home"
        direction="top"
        isVisible={currentScreen !== paths.home}
        to={paths.home}
      />
      {/* <HomeNavItem
        text="Events"
        direction="bottom"
        isVisible={currentScren !== paths.events}
        to={paths.events}
      /> */}
      <HomeNavItem
        text="Radio"
        direction="bottom"
        isVisible={currentScreen !== paths.radio}
        to={paths.radio}
      />
      <HomeNavItem
        text="About"
        direction="left"
        isVisible={currentScreen !== paths.about}
        to={paths.about}
      />
      <HomeNavItem
        text="Gallery"
        direction="right"
        isVisible={currentScreen !== paths.gallery}
        to={paths.gallery}
      />
    </StyledDiv>
  );
};

const Home = ({ location }) => {
  return (
    <>
      <HomeTitle />
      <HomeScreenOverlay currentScreen={location.pathname} />
      <MainCanvas isVisible={location.pathname === paths.home} />
    </>
  );
};

export default Home;
