import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../AppGlobalStyle";
import { Link } from "@reach/router";

const StyledDiv = styled.div`
  position: relative;
  margin: 16px 0px;
  display: inline-block;
  .artwork {
    display: flex;
    position: relative;
    justify-content: center;
    @media ${device.mobileM} {
      .creator {
        font-size: 12px;
      }
      h2 {
        font-size: 16px;
      }
    }
    @media ${device.tablet} {
      .creator {
        font-size: 20px;
      }
      h2 {
        font-size: 24px;
      }
    }
    .image {
      img {
        max-width: 100%;
        transform: scale(100%);
        transition: transform 0.2s ease-out;
        &:hover {
          transform: scale(102%);
        }
      }
      margin: 0px 10px;
    }
    .title {
      position: absolute;
      bottom: 0;
      left: 0;
      margin-bottom: 20px;
    }
    .creator {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 12px;
      filter: drop-shadow(4px 2px 2px rgb(0, 0, 0, 0.3));
      border-top: solid 3px #fff;
      max-width: 150px;
      text-align: right;
    }
  }
  .description {
    margin: 8px 10px;
    a {
      text-decoration: none;
      border-bottom: solid 1px #fff;
      padding-bottom: 4px;
    }
    /* border-left: 3px solid #fff; */
    /* padding-left: 8px; */
    /* min-height: 50px; */
  }
`;

const LinkWithContent = ({ link, isLinkInternal, children }) => {
  if (isLinkInternal) {
    if (content) {
      return <Link to={link}>{children}</Link>;
    } else {
      return <Link to={link}>{children}</Link>;
    }
  } else {
    console.log(content);
    if (link) {
      return <a href={link}>{children}</a>;
    } else {
      return <a href={link}>{children}</a>;
    }
  }
};

const GalleryCard = ({
  imageUrl,
  description,
  creator,
  title,
  link,
  linkText,
  isLinkInternal,
}) => {
  return (
    <StyledDiv>
      <div className="artwork">
        <div className="image">
          <LinkWithContent link={link} isLinkInternal={isLinkInternal}>
            {imageUrl ? <img src={imageUrl} /> : <img src="img/pending.png" />}
          </LinkWithContent>
        </div>
        <h2 className="title">{title}</h2>
        <div className="creator">{creator}</div>
      </div>
      <div className="description">
        <p>{description}</p>
        <LinkWithContent link={link} isLinkInternal={isLinkInternal}>
          {linkText ?? "➜ Go to artwork"}
        </LinkWithContent>
      </div>
    </StyledDiv>
  );
};

GalleryCard.propTypes = {
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  creator: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default GalleryCard;
