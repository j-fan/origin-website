import React from "react";
import Page from "./Page";
import styled from "styled-components";
import { device } from "../AppGlobalStyle";

const ImagesAndDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media ${device.tablet} {
    grid-template-columns: 4fr 1fr;
  }
`;

const AlignBottom = styled.div`
  margin-top: auto;
  color: #aaa;
`;

const ArtworkPage = ({
  title,
  description,
  date,
  artist,
  medium,
  imageUrls,
}) => {
  return (
    <Page isVisible>
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <ImagesAndDetails>
        <div>{imageUrls && imageUrls.map((url) => <img src={url} />)}</div>
        <AlignBottom>
          <p>{medium}</p>
          <p>{date}</p>
        </AlignBottom>
      </ImagesAndDetails>
      <h3>Description</h3>
      <p>{description}</p>
    </Page>
  );
};

export default ArtworkPage;
