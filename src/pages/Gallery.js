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

const StyledImg = styled.img`
  width: 100%;
`;

const Spacer = styled.div`
  height: 50px;
  width: 100%;
`;

const Gallery = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Current Exhibitions</h1>
      <h2>Origin Parallels</h2>
      <h3>16.09.2020 - 3.10.2020</h3>
      <StyledImg
        src="img/originParallels.jpg"
        ahref="https://www.facebook.com/events/327620571919303"
      />
      <p>
        Origin Parallels is the second exhibition of the Origin collective and
        the to be held at Kudos Gallery. This show will feature interactive
        visual, audio and physical artworks that are networked to one another.
        <br />
        <br />
        <a href="https://www.facebook.com/events/327620571919303">
          ➜ Facebook event link
        </a>
      </p>
      <Spacer />
      <h1>Past Exhibitions</h1>
      <h2>Origin Virtual</h2>
      <h3>24.06.2020 - 8.07.2020</h3>
      <p id="OriginArtworks">
        Origin Virtual is an interactive web exhibition by Sydney Media Arts
        collective <a href="https://www.originart.xyz/">Origin</a>.
        <br />
        <br />
        This exhibition was born out of the current environment which forced
        artists to quickly adapt to a new normal in which the Virtual plane
        becomes increasingly necessary to everyday life. Origin (Virtual)
        features artworks that push the boundaries of websites as a medium, with
        artists interrogating the applications of artificial intelligence,
        generative art and audiovisual installations in the virtual space.
        <br />
        <br />
        In doing so, Origin seeks to deconstruct the traditional online gallery
        experience whilst addressing how social interaction and spectacle has
        morphed during our time inside.
      </p>
      <StyledDiv>
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
          creator="Patrick Younis Jordan East"
          link={"http://tildevisual.tv/"}
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
