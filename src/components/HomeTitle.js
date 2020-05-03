import React from "react";
import styled from "styled-components";
import { device } from "../AppGlobalStyle";

const HomeTitleStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Centre = styled.div`
  display: flex;
  @media ${device.mobileS} {
    h1 {
      font-size: 36px;
    }
    h3 {
      text-align: center;
    }
    img {
      width: 80px;
      height: 80px;
    }
  }

  @media ${device.laptop} {
    h1 {
      font-size: 72px;
    }
    h3 {
      font-size: 32px;
      padding-right: 8px;
      text-align: right;
    }
    img {
      width: 140px;
      height: 140px;
    }
  }
  h1 {
    text-transform: uppercase;
    color: #fff;
    margin: 2px 8px;
  }
  h3 {
    margin: 2px 8px;
    text-transform: uppercase;
    color: #000;
    background-color: #fff;
  }
`;

const HomeTitle = () => (
  <HomeTitleStyle>
    <Centre>
      <div>
        <img src="img/origin.svg" />
      </div>
      <div>
        <h1>Origin</h1>
        <h3>Collective</h3>
      </div>
    </Centre>
  </HomeTitleStyle>
);

export default HomeTitle;
