import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";

const Gallery = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Gallery</h1>
      <p>Coming soon!</p>
    </Page>
  );
};

Gallery.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Gallery;
