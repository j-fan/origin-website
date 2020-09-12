import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../AppGlobalStyle";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 100px;
`;

const StyledImage = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const FlexDiv = styled.div`
  display: block;
  iframe {
    margin-bottom: 10px;
    height: 300px;
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    iframe {
      height: 300px;
    }
  }
`;

const Radio = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Radio</h1>
      <h2>Origin (Virtual) : Meeting Hill</h2>
      <p>
        Meeting Hill radio was a past event as part of the Origin Virtual
        exhibition. The radio is not live anymore, but you can experience it
        again through the past recordings on this page, or visit the virtual
        landscape <a href="http://tildevisual.tv/">here</a>.
        {/* Radio not playing?{" "}<a href="http://167.172.134.69/radio/8000/radio.mp3">Try this</a>! */}
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
      <FlexDiv>
        <div>
          <h2>Programme</h2>
          <StyledImage>
            <img src="img/MeetingHillprogramming.jpg" alt="programme" />
          </StyledImage>
        </div>
        <div>
          <h2>Past recordings</h2>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/zS2J8WTQhKw?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/Cr-LIkSlqvQ?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/WVmfLsituMI?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/eJa5QqjwKE8?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </FlexDiv>
    </Page>
  );
};

Radio.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Radio;
