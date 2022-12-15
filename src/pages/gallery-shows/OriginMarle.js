import React from "react";
import { GalleryCardsContainer } from "./styled";
import GalleryCard from "../../components/GalleryCard";

export const OriginMarle = () => {
  return (
    <>
      <h2>Origin Marle</h2>
      <h3>12.12.2022</h3>
      <a
        href="https://j-fan.github.io/marle/home"
        target="_blank"
        rel="noopener"
      >
        <img src="img/origin-marle-banner.jpg" />
      </a>
      <p>
        Origin (Marle) is a collaborative project from Jordan East, Jane Fan,
        Callum Howard, Pat Younis and Alvin Ruiyuan Zhong and a continuation of
        their digitally-focused practice as Origin. This work co-opts the
        ingrained functionality of the Internet, repurposing code and protocols
        to create a new network composed of fractured text, animation, chatbots
        and 3D rendered worlds. This artistic intervention into passive web
        browsing reflects on our crowded and anxious online experiences,
        bringing audiences into a digital dream as you traverse the system with
        Marle.
      </p>
      <p>
        This project is commissioned by 4A and curated by Con Gerakaris and
        Marco Rinaldi. This project is supported by the Copyright Agency
        Cultural Fund.
      </p>
      <a href="https://4a.com.au/digital/origin-marle">
        ➜ Visit Origin Marle on the 4A gallery website
      </a>
      <p>
        Origin Marle is best experienced from the home screen, but you may
        browse the catalog of works in this artwork:
      </p>
      <GalleryCardsContainer>
        <GalleryCard
          title="Marle home page"
          imageUrl="img/marle-home.jpg"
          creator="Jane Fan, Jordan East"
          link={"https://j-fan.github.io/marle/home"}
        />
        <GalleryCard
          title="Corrosion"
          imageUrl="img/corrosion.jpg"
          creator="Callum Howard"
          link={"https://j-fan.github.io/marle/callum/corrosion"}
        />
        <GalleryCard
          title="Growing pAIns"
          imageUrl="img/growing-pains.jpg"
          creator="Pat Younis, Jordan East"
          link={"https://j-fan.github.io/marle/jordan-pat/video"}
        />
        <GalleryCard
          title="Weave my reality"
          imageUrl="img/weave-my-reality.jpg"
          creator="Callum Howard"
          link={"https://j-fan.github.io/marle/callum/weave-my-reality"}
        />
        <GalleryCard
          title="Rest here weary traveller"
          imageUrl="img/rest-here.jpg"
          creator="Alvin Zhong"
          link={"https://j-fan.github.io/marle/alvin/rest-here"}
        />
        <GalleryCard
          title="Fabric of dreams"
          imageUrl="img/fabric-of-dreams.jpg"
          creator="Jane Fan"
          link={"https://j-fan.github.io/marle/jane/fabric-of-dreams"}
        />
        <GalleryCard
          title="Escaping the cage"
          imageUrl="img/escaping-the-cage.jpg"
          creator="Jane Fan"
          link={"https://j-fan.github.io/marle/jane/escaping-the-cage"}
        />
        <GalleryCard
          title="Your face"
          imageUrl="img/your-face.jpg"
          creator="Jane Fan"
          link={"https://j-fan.github.io/marle/jane/your-face"}
        />
      </GalleryCardsContainer>
    </>
  );
};
