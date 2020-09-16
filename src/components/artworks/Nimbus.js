import React from "react";
import ArtworkPage from "../ArtworkPage";

const Nimbus = () => {
  return (
    <ArtworkPage
      title="nimbus & me"
      artist="Pat Younis"
      imageUrls={["img/nimbus.png"]}
      description={
        <div>
          'Nimbus & Me' is a demo for an extension of my previous project
          'Aeolus & Me'. Using the same pinch mechanics that i used for the
          previous project, the user is able to generate clouds.
        </div>
      }
      date="2017"
      medium="Leap motion, Unity game engine, camp"
    />
  );
};

export default Nimbus;
