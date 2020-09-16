import React from "react";
import ArtworkPage from "../ArtworkPage";

const Singularity = () => {
  return (
    <ArtworkPage
      title="Singularity"
      artist="Pat Younis, Jordan East, Dylan Marelic-Mcintyre"
      imageUrls={["img/singularity.jpg"]}
      description={
        <div>
          Singularity is an interactive virtual landscape designed to be a
          digital nexus for the themes of Origin (Parallels). Constructed with
          the intention to inspire new ways of connecting artworks within
          exhibitions, Singularity acts as both an independent generative
          artwork and a bridge between the other artists works using data
          inputted by the user through a controller.
          <br />
          The user interacts with a custom patch bay to make connections between
          Singularity and the open ports that represent work from the other
          artists, and by doing so provides an opportunity for the user to
          create their own soundscape across the gallery. Interpretations of the
          other artworks within the space also find their way into the virtual
          landscape, where the user can amplify their presence within the
          environment by connecting more cables into the correlating cable
          jacks.
        </div>
      }
      date="2020"
      medium="Unity, Arduino, OSC"
    />
  );
};

export default Singularity;
