import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledMotionDiv = styled(motion.div)`
  background-color: #111;
  color: #fff;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 98;
`;

const InnerDiv = styled.div`
  margin: 40px;
  border: solid 1px #333;
  height: calc(100% - 80px);
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
