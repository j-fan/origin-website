import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";

const Gallery = ({ isVisible }) => {
  return (
    <Page isVisible={isVisible}>
      <h1>Gallery</h1>
    </Page>
  );
};

Gallery.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Gallery;
