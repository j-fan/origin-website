import React from "react";
import ArtworkPage from "../ArtworkPage";

const MeetingHill = () => {
  return (
    <ArtworkPage
      title="Meeting Hill"
      artist="Pat Younis, Jordan East"
      imageUrls={["img/singularity.jpg"]}
      description={
        <div>
          Meeting Hill
        </div>
      }
      date="2020"
      medium="Unity, Arduino, OSC"
    />
  );
};

export default MeetingHill;
