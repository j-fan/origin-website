import React from "react";
import Page from "./Page";
import styled from "styled-components";

const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 70%;
    margin-bottom:5px;
  }
`;

const MediumDate = styled.div`
  margin: 20px 0;
  color: #aaa;
  p {
    margin: 0;
  }
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
      <Images>
        {imageUrls && imageUrls.map((url, i) => <img src={url} key={i} />)}
      </Images>
      <h3>Description</h3>
      <MediumDate>
        <p>{medium}</p>
        <p>{date}</p>
      </MediumDate>
      <p>{description}</p>
    </Page>
  );
};

export default ArtworkPage;
