import React from "react";
import { GalleryCardsContainer } from "./styled";
import GalleryCard from "../../components/GalleryCard";

export const OriginParallels = () => {
  return (
    <>
      <h2>Origin Parallels</h2>
      <h3>16.09.2020 - 3.10.2020</h3>
      <img src="img/originParallels.jpg" />
      <p>
        Origin Parallels is the second exhibition of the Origin collective and
        the to be held at Kudos Gallery. This show will feature interactive
        visual, audio and physical artworks that are networked to one another.
      </p>
      <p>
        <a href="https://www.facebook.com/events/327620571919303">
          ➜ Facebook event link
        </a>
      </p>
      <GalleryCardsContainer>
        <GalleryCard
          title="Origin TV"
          creator="Alvin Zhong"
          link={"/artwork?id=origintv"}
          imageUrl="img/origintv.jpg"
          linkText="➜ Artwork details"
          isLinkInternal
        />
        <GalleryCard
          title="All Aboard"
          imageUrl="img/all_aboard.png"
          creator="Alvin Zhong"
          link={"/artwork?id=allaboard"}
          linkText="➜ Artwork details"
          isLinkInternal
        />
        <GalleryCard
          title="Orbis Junctus"
          imageUrl="img/orbisJunctus.jpg"
          creator="Callum Howard"
          link={"/artwork?id=orbisjunctus"}
          linkText="➜ Artwork details"
          isLinkInternal
        />
        <GalleryCard
          title="Ars Anima"
          imageUrl="img/arsanima.jpg"
          creator="Callum Howard"
          link={"/artwork?id=arsanima"}
          linkText="➜ Artwork details"
          isLinkInternal
        />
        <GalleryCard
          title="Cybermancy"
          imageUrl="img/cybermancy.jpg"
          creator="Jane Fan"
          link={"/artwork?id=cybermancy"}
          linkText="➜ Artwork details"
          isLinkInternal
        />
        <GalleryCard
          title="Celestial Bodies"
          imageUrl="img/celestial_bodies.png"
          creator="Jane Fan"
          link={"/artwork?id=celestialbodies"}
          linkText="➜ Artwork details"
          isLinkInternal
        />
        <GalleryCard
          title="Singularity"
          creator="Pat Younis, Jordan East, Dylan Marelic-Mcintyre"
          imageUrl="img/Singularity1.jpg"
          link={"/artwork?id=singularity"}
          linkText="➜ Artwork details"
          isLinkInternal
        />
        <GalleryCard
          title="nimbus & me"
          imageUrl="img/nimbus.png"
          creator="Pat Younis"
          link={"/artwork?id=nimbus"}
          linkText="➜ Artwork details"
          isLinkInternal
        />
        <GalleryCard
          title="re:reality"
          imageUrl="img/rereality.jpg"
          creator="Pat Younis"
          link={"/artwork?id=rereality"}
          linkText="➜ Artwork details"
          isLinkInternal
        />
      </GalleryCardsContainer>
    </>
  );
};
