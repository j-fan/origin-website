import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";

const Gallery = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Gallery</h1>
      <h3>Coming soon!</h3>
    </Page>
  );
};

Gallery.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Gallery;
