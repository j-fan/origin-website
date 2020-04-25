import React from "react";
import Page from "../components/Page";
import PropTypes, { bool } from "prop-types";

const About = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>About</h1>
    </Page>
  );
};

About.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default About;
