import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 100px;
`;

const StyledImage = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  flex-direction: column;
  img {
    margin: 10px auto;
    max-width: 700px;
  }
`;

const Radio = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Radio</h1>
      <h2>Origin (Virtual) : Meeting Hill</h2>
      <p>
        Have the full audio-visual experience on the{" "}
        <a href="http://tildevisual.tv/">Meeting Hill</a> artwork. Radio not
        playing?{" "}
        <a href="http://167.172.134.69/radio/8000/radio.mp3">Try this</a>!
      </p>
      <StyledDiv>
        <audio controls>
          <source
            autoPlay
            crossOrigin="anonymous"
            src="http://167.172.134.69/radio/8000/radio.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element. Try using Chrome!
        </audio>
        <p></p>
      </StyledDiv>
      <h2>Programme</h2>
      <StyledImage>
        <img src="img/debpromo.png" alt="debPromo" />
        <img src="img/MeetingHillprogramming.jpg" alt="programme" />
      </StyledImage>
    </Page>
  );
};

Radio.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Radio;
