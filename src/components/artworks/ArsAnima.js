import React from "react";
import ArtworkPage from "../ArtworkPage";

const ArsAnima = () => {
  return (
    <ArtworkPage
      title="Ars Anima"
      artist="Callum Howard"
      imageUrls={["img/arsanima.jpg"]}
      description={
        <div>
          Evolution is a mysterious machine. Based on simple rules, it tunes
          itself through selecting the most fit organisms. Due to the large
          timescales involved, rarely can the process of Evolution be observed
          before our eyes. However, with the aid of computer simulation, it is
          possible to rapidly accelerate the process and evolution can be made
          visible.
          <br />
          Ars Anima is a generative artificial life simulation, visualising the
          process of evolution. In this work, abstract virtual creatures
          (modelled from single cell organisms) live and die in an accelerated
          struggle to find food and become the fittest survivors. The work aims
          to animate life and vitality, to represent the fundamental mechanics
          of evolution through the lens of artistic visualisation, and to allow
          the audience to discover actions that will impact the virtual
          ecosystem. Within the ecosystem, artificial creatures are simulated
          and interact with their environment, having the capacity for limited
          autonomy and decision making. Species may compete or cooperate,
          developing an "instinct", and rapidly adapting and devising strategies
          for survival. Only the most fit will have the chance to procreate and
          pass on their virtual genetic legacy. The work employs practices of
          representation though visualisation, interaction design, and
          artificial intelligence. It aims to challenge the audience's
          preconceptions on agency and whether it might be possible for life to
          exist within virtual worlds.
        </div>
      }
      date="2017"
      medium="Digital media"
    />
  );
};

export default ArsAnima;
