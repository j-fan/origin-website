import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const StyledMotionDiv = styled(motion.div)`
  background-color: #000;
  color: #fff;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

const animationState = {
  active: { opacity: 1, x: 0 },
  inactive: { opacity: 0, x: "-100%" },
};

const Page = ({ direction, isVisible, children }) => {
  return (
    <StyledMotionDiv
      initial={false}
      animate={isVisible ? "active" : "inactive"}
      variants={animationState}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </StyledMotionDiv>
  );
};

Page.propTypes = {
  direction: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Page;
