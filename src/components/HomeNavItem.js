import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space_xs, hover_resize, font_m } from "../AppGlobalStyle";

const StyledDiv = styled.div`
  text-transform: uppercase;
  position: absolute;
  display: flex;
  justify-content: center;
  user-select: none;
  padding: ${space_xs};
  font-weight: bold;
  color: #ccc;
  font-size: ${font_m};

  &:hover {
    /* try a stripey loading bar anim?*/
    transform: scale(${hover_resize});
    cursor: pointer;
  }
  &:active {
    transform: scale(100%);
    cursor: pointer;
  }
  ${(props) =>
    props.direction == "left"
      ? `
        writing-mode: vertical-rl;
        left: 0;
        height: 100%;
      `
      : props.direction == "right"
      ? `
        writing-mode: sideways-lr;
        right: 0;
        height: 100%;
        `
      : props.direction == "bottom"
      ? `
        transform: rotate(0deg);
        bottom: 0;
        width: 100%;
      `
      : `
        transform: rotate(180deg);
        top: 0;
        width: 100%;
      `}
`;

const HomeNavItem = ({ text, action, direction, isVisible }) => {
  return <StyledDiv direction={direction}>{text}</StyledDiv>;
};

HomeNavItem.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  direction: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired, // do a jump in/out animation like https://www.imdsg.ch/
};

export default HomeNavItem;
