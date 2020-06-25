import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20%;
`;

const StyledImage = styled.img`
  margin-top: 20%;
  width: 100%;
  height: 100%;
`;

const Radio = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Radio</h1>
    <h2>Origin (Virtual) : Meeting Hill</h2>
      <StyledDiv>
        <audio controls>
          <source
            autoplay
            crossorigin="anonymous"
            src="http://167.172.134.69/radio/8000/radio.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element. Try using Chrome!
        </audio>
      </StyledDiv>

      <StyledImage src="img/MeetingHillprogramming.jpg" alt="programme"/>

    </Page>
  );
};

Radio.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Radio;

