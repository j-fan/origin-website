import React from "react";
import Page from "../components/Page";
import * as queryString from "query-string";
import CelestialBodies from "../components/artworks/CelestialBodies";

// using querystring for now because reach-router URL params
// are broken in this project

const ArtworkDetails = ({ location }) => {
  const id = queryString.parse(location.search).id;
  if (!id) {
    return <ArtworkNotFound />;
  }
  return RenderArtworkPage(id);
};

const ArtworkNotFound = () => (
  <Page isVisible direction="top">
    <h2>Artwork not found.</h2>
  </Page>
);

const RenderArtworkPage = (id) => {
  switch (id) {
    case "celestialbodies":
      return <CelestialBodies />;
    default:
      return <ArtworkNotFound />;
  }
};

export default ArtworkDetails;
