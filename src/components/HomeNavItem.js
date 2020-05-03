import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space_xs, hover_resize, font_m } from "../AppGlobalStyle";
import { motion } from "framer-motion";

const StyledDiv = styled(motion.div)`
  text-transform: uppercase;
  position: absolute;
  display: flex;
  justify-content: center;
  user-select: none;
  padding: ${space_xs};
  font-weight: bold;
  color: #fff;
  font-size: ${font_m};
  pointer-events: auto;

  &:hover {
    /* try a stripey loading bar anim?*/
    transform: scale(${hover_resize});
    cursor: pointer;
  }
  &:active {
    transform: scale(100%);
    cursor: pointer;
  }
  ${(props) => {
    if (props.direction == "left") {
      return `
        writing-mode: vertical-lr;
        left: 0;
        height: 100%;`;
    } else if (props.direction == "right") {
      return `
        writing-mode: vertical-lr;
        right: 0;
        height: 100%;
        `;
    } else if (props.direction == "bottom") {
      return `
        bottom: 0;
        width: 100%;
      `;
    } else if (props.direction == "top") {
      return `
        top: 0;
        width: 100%;
      `;
    }
  }}
`;

const animationStates = {
  left: {
    active: { x: 0, delay: 0.3 },
    inactive: { x: "-100%" },
  },
  right: {
    active: { x: 0, delay: 0.3 },
    inactive: { x: "100%" },
  },
  top: {
    active: { y: 0, delay: 0.3 },
    inactive: { y: "-100%" },
  },
  bottom: {
    active: { y: 0, delay: 0.3 },
    inactive: { y: "100%" },
  },
};

const HomeNavItem = ({ text, onClick, direction, isVisible }) => {
  if (direction in animationStates) {
    const animationState = animationStates[direction];
    return (
      <StyledDiv
        initial={false}
        animate={isVisible ? "active" : "inactive"}
        variants={animationState}
        transition={{
          ease: "backIn",
          duration: 0.5,
        }}
        onClick={onClick}
        direction={direction}
      >
        {text}
      </StyledDiv>
    );
  }
  return null;
};

HomeNavItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default HomeNavItem;
