import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Radio = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Radio</h1>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20%" }}>
        <audio controls>
          <source
            src="http://139.218.99.233:3141/radio/8000/radio.mp3?1589614808"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </Page>
  );
};

Radio.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Radio;

