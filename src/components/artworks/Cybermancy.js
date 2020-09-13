import React from "react";
import ArtworkPage from "../ArtworkPage";

const Cybermancy = () => {
  return (
    <ArtworkPage
      title="Cybermancy"
      artist="Jane Fan"
      imageUrls={["img/cybermancy.jpg"]}
      description={
        <div>
          <a href="https://j-fan.github.io/cybermancy2/">Cybermancy</a> is a AR
          palm reading experience which presents the user with targeted
          advertisements and content based on their estimated demographic.
          Underneath this pseudoscientific exterior, analysis is done by AI
          known as neural networks. They are advanced enough that they can only
          be understood as "black boxes". Like an audience before a magician,
          you may observe things going in and out, but not how it is transformed
          in between. Expectations of magic and science, privacy and exposure
          collide and merge in this experience.
        </div>
      }
      date="2020"
      medium="Digital media: Website"
    />
  );
};

export default Cybermancy;
