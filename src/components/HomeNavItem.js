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
  ${(props) => {
    if (props.direction == "left") {
      return `
        writing-mode: vertical-rl;
        left: 0;
        height: 100%;`;
    } else if (props.direction == "right") {
      return `
        writing-mode: sideways-lr;
        right: 0;
        height: 100%;
        `;
    } else if (props.direction == "bottom") {
      return `
        transform: rotate(0deg);
        bottom: 0;
        width: 100%;
      `;
    } else if (props.direction == "top") {
      return `
        rotate: 180deg;
        top: 0;
        width: 100%;
      `;
    }
  }}
`;

const HomeNavItem = ({ text, onClick, direction, isVisible }) => {
  return (
    <StyledDiv onClick={onClick} direction={direction}>
      {text}
    </StyledDiv>
  );
};

HomeNavItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  direction: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired, // do a jump in/out animation like https://www.imdsg.ch/
};

export default HomeNavItem;
