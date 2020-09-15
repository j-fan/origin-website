import React from "react";
import ArtworkPage from "../ArtworkPage";

const OriginTv = () => {
  return (
    <ArtworkPage
      title="Origin TV"
      artist="Alvin Zhong"
      imageUrls={["img/origintv.jpg"]}
      description={
        <div>
          “Origin TV” is a continuous collaborative effort by the Origin
          artists. Starting in 2019 at the first Origin show at Goodspace
          Gallery, the Origin TV is an opportunity for artists to show
          experimental, unpolished or small-scale work. The TV was first used as
          an homage to Patrick Younis’ and Alvin Zhong’s gateway into media
          arts: Video games and the Analog TV. The goal is for the TV to be
          revived every show with continuous iterations as Origin expands into
          something new, and for it to exist as a video process diary in which
          artists from Origin can observe how ideas refine, change and grow over
          the passing of time.
        </div>
      }
      date="2019-2020"
      medium="Analog TV & Animation "
    />
  );
};

export default OriginTv;
