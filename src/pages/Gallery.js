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

const Gallery = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Gallery</h1>
      <StyledDiv>
        <GalleryCard
          title="Subvirtual"
          imageUrl="img/subvirtual.jpg"
          creator="Callum Howard"
          link={"https://www.originart.xyz"}
          description="Doggo ipsum ur givin me a spook ruff woofer, boofers."
        />
        <GalleryCard
          title="Cybermancy"
          imageUrl="img/cybermancy.jpg"
          creator="Jane Fan"
          link={"https://j-fan.github.io/cybermancy2/"}
          description="Doggo ipsum ur givin me a spook ruff woofer, boofers. Shoober he made many woofs heckin good boys and girls."
        />
        <GalleryCard
          title="Long Way Home"
          imageUrl="img/longWayHome.jpg"
          creator="Alvin Zhong"
          link={"https://www.originart.xyz"}
          description="Doggo ipsum ur givin me a spook ruff woofer, boofers."
        />
        <GalleryCard
          title="Meeting Hill"
          imageUrl="img/meetingHill.jpg"
          creator="Patrick Younis Jordan East"
          link={"https://www.originart.xyz"}
          description="Doggo ipsum ur givin me a spook ruff woofer, boofers. Shoober he made many woofs heckin good boys and girls."
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
