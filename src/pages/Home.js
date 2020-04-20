import React from "react";
import styled from "styled-components";
import HomeNavItem from "../components/HomeNavItem";

const StyledDiv = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <StyledDiv>
      <HomeNavItem text="Events" direction="bottom" isVisible={true} />
      <HomeNavItem text="About" direction="left" isVisible={true} />
      <HomeNavItem text="Gallery" direction="right" isVisible={true} />
    </StyledDiv>
  );
};

export default Home;
