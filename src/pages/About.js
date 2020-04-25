import React from "react";
import Page from "../components/Page";
import PropTypes, { bool } from "prop-types";

const About = ({ isVisible }) => {
  return (
    <Page isVisible={isVisible}>
      <h1>About</h1>
    </Page>
  );
};

About.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default About;
