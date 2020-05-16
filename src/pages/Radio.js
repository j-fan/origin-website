import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20%;
`;

const Radio = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Radio</h1>
      <StyledDiv>
        <audio controls>
          <source
            autoplay
            crossorigin="anonymous"
            src="http://radio.originart.xyz/radio/8000/radio.mp3?1589621110"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </StyledDiv>
    </Page>
  );
};

Radio.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Radio;

