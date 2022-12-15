import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";
import styled from "styled-components";
import { OriginMarle } from "./gallery-shows/OriginMarle";
import { OriginParallels } from "./gallery-shows/OriginParallels";
import { OriginVirtual } from "./gallery-shows/OriginVirtual";

export const Spacer = styled.div`
  height: 50px;
  width: 100%;
`;

const Gallery = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Past Exhibitions</h1>
      <OriginMarle />
      <Spacer />
      <OriginParallels />
      <Spacer />
      <OriginVirtual />
    </Page>
  );
};

Gallery.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Gallery;
