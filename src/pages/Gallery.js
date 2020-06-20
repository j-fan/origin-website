import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";
import GalleryCard from "../components/GalleryCard";
import styled from "styled-components";
import { device } from "../AppGlobalStyle";

const StyledDiv = styled.div`
  @media ${device.mobileM} {
    column-count: 1;
  }
  @media ${device.tablet} {
    column-count: 2;
    column-gap: 40px;
  }
`;

const OriginHeader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
  margin-bottom: 20px;
  position: relative;
  h1 {
    text-align: center;
  }
  .centerAlign {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #DownArrow {
    position: absolute;
    bottom: 20px;
    font-size: 40px;
    cursor: pointer;
    opacity: 1;
    pointer-events: all;
    transition: opacity 0.2s ease;
    &.hidden {
      opacity: 0;
      pointer-events: none;
    }
  }
`;

const OriginDesc = styled.h4`
  font-size: 16px;
  @media ${device.mobileS} {
    margin: 50px 0px;
  }
  @media ${device.tablet} {
    margin: 50px;
  }
`;

const scrollToMainContent = () => {
  const content = document.getElementById("OriginArtworks");
  content.scrollIntoView({ behavior: "smooth" });
  const downArrow = document.getElementById("DownArrow");
  downArrow.classList.add("hidden");
};

const Gallery = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <OriginHeader>
        <div>
          <h1>Origin Virtual</h1>
          <div class="centerAlign">
            <img src="https://www.originart.xyz/img/origin.svg" />
          </div>
          <div class="centerAlign">
            <div id="DownArrow" onClick={scrollToMainContent}>
              🠗
            </div>
          </div>
        </div>
      </OriginHeader>
      <OriginDesc id="OriginArtworks">
        Online (Virtual) is a interactive web exhibition by Sydney based Media
        Arts collective <a href="https://www.originart.xyz/">Origin</a>. It
        features artworks that push the boundaries of websites as a medium,
        including artificial intelligence, generative art and audiovisual
        installations in virtual space.
      </OriginDesc>
      <StyledDiv>
        <GalleryCard
          title="Subvirtual"
          imageUrl="https://i.imgur.com/jzWKIfm.jpg"
          creator="Callum Howard"
          link={"https://www.originart.xyz/"}
          description="Subvirtual Gallery is a gallery full of blank canvases, but as visitors explore the mysteries of the space they will find the gallery's artworks appear everywhere but on the canvas."
        />
        <GalleryCard
          title="Cybermancy"
          imageUrl="https://i.imgur.com/sxzEcvD.jpg"
          creator="Jane Fan"
          link={"https://j-fan.github.io/cybermancy2/"}
          description="Cybermancy is a AR palm reading experience which presents the user with targeted advertisements and content based on their estimated demographic."
        />
        <GalleryCard
          title="Long Way Home"
          imageUrl="https://i.imgur.com/5j5dxXk.jpg"
          creator="Alvin Zhong"
          link={"https://j-fan.github.io/long-way-home/"}
          description="Long Way Home is an interactive artwork that brings the sensation of travel into your screen."
        />
        <GalleryCard
          title="Meeting Hill"
          imageUrl="https://i.imgur.com/EQIsHcH.jpg"
          creator="Patrick Younis Jordan East"
          link={"https://www.originart.xyz/"}
          description="Meeting Hill is a web based virtual hilltop, decorated with furniture and a sound system, where visitors can come to listen to a live curated online radio station."
        />
      </StyledDiv>
    </Page>
  );
};

Gallery.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Gallery;
