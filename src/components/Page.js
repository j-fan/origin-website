import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../AppGlobalStyle";

const StyledMotionDiv = styled(motion.div)`
  background-color: #111;
  color: #fff;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 98;
  @media ${device.mobileS} {
    h1 {
      font-size: 40px;
    }
  }
  @media ${device.laptop} {
    h1 {
      font-size: 72px;
    }
  }

  h1 {
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    margin: 0;
  }

  h2,
  h3 {
    text-transform: uppercase;
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: transparent;
  }
`;

const InnerDiv = styled.div`
  @media ${device.mobileS} {
    margin: 40px;
    height: calc(100% - 80px);
  }
  @media ${device.laptop} {
    margin: 80px 400px;
    height: calc(100% - 80px);
  }

  overflow-y: scroll;
`;

const animationStates = {
  left: {
    active: { x: 0 },
    inactive: { x: "-100%" },
  },
  right: {
    active: { x: 0 },
    inactive: { x: "100%" },
  },
  top: {
    active: { y: 0 },
    inactive: { y: "-100%" },
  },
  bottom: {
    active: { y: 0 },
    inactive: { y: "100%" },
  },
};

const Page = ({ direction, isVisible, children }) => {
  if (direction in animationStates) {
    const animationState = animationStates[direction];
    return (
      <StyledMotionDiv
        initial={false}
        animate={isVisible ? "active" : "inactive"}
        variants={animationState}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <InnerDiv>{children}</InnerDiv>
      </StyledMotionDiv>
    );
  }
  return null;
};

Page.propTypes = {
  direction: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Page;
