import React from "react";
import Page from "../components/Page";
import * as queryString from "query-string";
import CelestialBodies from "../components/artworks/CelestialBodies";
import AllAboard from "../components/artworks/AllAboard";
import Cybermancy from "../components/artworks/Cybermancy";
import OriginTv from "../components/artworks/OriginTv";
import Singularity from "../components/artworks/Singularity";
import ArsAnima from "../components/artworks/ArsAnima";
import OrbisJunctus from "../components/artworks/OrbisJunctus";
import ReReality from "../components/artworks/ReReality";
import Nimbus from "../components/artworks/Nimbus";
import MeetingHill from "../components/artworks/MeetingHill";

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
    case "allaboard":
      return <AllAboard />;
    case "origintv":
      return <OriginTv />;
    case "cybermancy":
      return <Cybermancy />;
    case "singularity":
      return <Singularity />;
    case "arsanima":
      return <ArsAnima />;
    case "orbisjunctus":
      return <OrbisJunctus />;
    case "nimbus":
      return <Nimbus />;
    case "rereality":
      return <ReReality />;
    case "meetinghill":
      return <MeetingHill />;
    default:
      return <ArtworkNotFound />;
  }
};

export default ArtworkDetails;
