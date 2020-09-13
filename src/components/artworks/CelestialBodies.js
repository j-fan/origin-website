import React from "react";
import ArtworkPage from "../ArtworkPage";

const CelestialBodies = () => {
  return (
    <ArtworkPage
      title="Celestial Bodies"
      artist="Jane Fan"
      imageUrls={["img/celestial_bodies.png"]}
      description={
        <div>
          Celestial Bodies was created to explore the challenges of interactive
          art, one of which is the difficulty in engaging extended thoughtful
          attention from the viewer. The choice of game engine as the medium
          makes this especially difficult because of its associated aesthetics
          and expectations for action and instant gratification. Celestial
          Bodies counters that by making stillness of the body the action for
          activation. The dazzling particles effects, normally a source of
          sensory assault in a game, have been designed to hypotise instead in
          this artwork. Although the interaction begins as a mirror of the body,
          awareness of the self becomes lost in the unfolding layers of
          animations, leading the way into thoughtful contemplation or
          meditation.
        </div>
      }
      date="2020"
      medium="Digital Media: Unity game engine, depth camera and projector"
    />
  );
};

export default CelestialBodies;
