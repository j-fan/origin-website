import React from "react";
import ArtworkPage from "../ArtworkPage";

const AllAboard = () => {
  return (
    <ArtworkPage
      title="All Aboard"
      artist="Alvin Zhong"
      imageUrls={["img/all_aboard2.png", "img/all_aboard.png"]}
      description={
        <div>
          “All Aboard” is a fantastically crafty and enamoured VJ experience
          emulating the whimsey of the artist’s personal experience of Tokyo’s
          railway system. Alvin Zhong revisits the themes of transit, nostalgia
          and affect that have remained present in his practice now through an
          invigorated, child-like lens, crafting handmade origami sets to
          reflect his obsession with the ornamental, the handmade, and the
          cartoonishly cute. Incorporating VJ (video jockeying) techniques, the
          artist invites the audience to play with a tactile interface that has
          been programmed to trigger live animations to alter environment,
          atmosphere and elements to generate unique combinations. “All Aboard”
          reflects the artist’s commitment to creating an immersive environment
          by creating a mixed reality. Audiences are encouraged to interact with
          the replica SUICA Ticket Recharge Station and collect handcrafted
          tickets as a souvenir of their travels.
          <br />
          “All Aboard” hopes to impart a moment of joy and memory to those who
          feel longing to travel to Japan once more, or if that is not
          applicable, at least incur a sense of wonder and imagination to
          encourage those to do so.
        </div>
      }
      date="2020"
      medium="Live VJ Experience & Installation"
    />
  );
};

export default AllAboard;
