import React from "react";
import { GalleryCardsContainer } from "./styled";
import GalleryCard from "../../components/GalleryCard";

export const OriginVirtual = () => {
  return (
    <>
      <h2>Origin Virtual</h2>
      <h3>24.06.2020 - 8.07.2020</h3>
      <img src="img/originVirtual.jpg" />
      <p>
        Origin Virtual is an interactive web exhibition by Sydney Media Arts
        collective <a href="https://www.originart.xyz/">Origin</a>.
      </p>
      <p>
        This exhibition was born out of the current environment which forced
        artists to quickly adapt to a new normal in which the Virtual plane
        becomes increasingly necessary to everyday life. Origin (Virtual)
        features artworks that push the boundaries of websites as a medium, with
        artists interrogating the applications of artificial intelligence,
        generative art and audiovisual installations in the virtual space.
      </p>
      <p>
        In doing so, Origin seeks to deconstruct the traditional online gallery
        experience whilst addressing how social interaction and spectacle has
        morphed during our time inside.
      </p>
      <GalleryCardsContainer>
        <GalleryCard
          title="Subvirtual"
          imageUrl="img/subvirtual.jpg"
          creator="Callum Howard"
          link={"https://www.callumhoward.com/origin/subvirtual"}
          description="Subvirtual Gallery is a gallery full of blank canvases, but as visitors explore the mysteries of the space they will find the gallery's artworks appear everywhere but on the canvas."
        />
        <GalleryCard
          title="Cybermancy"
          imageUrl="img/cybermancy.jpg"
          creator="Jane Fan"
          link={"https://j-fan.github.io/cybermancy2/"}
          description="Cybermancy is a AR palm reading experience which presents the user with targeted advertisements and content based on their estimated demographic."
        />
        <GalleryCard
          title="Long Way Home"
          imageUrl="img/longWayHome.jpg"
          creator="Alvin Zhong"
          link={"https://j-fan.github.io/long-way-home/"}
          description="Long Way Home is an interactive artwork that brings the sensation of travel into your screen."
        />
        <GalleryCard
          title="Meeting Hill"
          imageUrl="img/meetingHill.jpg"
          creator="Pat Younis, Jordan East"
          link={"/artwork?id=meetinghill"}
          linkText="➜ Artwork details"
          isLinkInternal
        />
      </GalleryCardsContainer>
    </>
  );
};
