import { device } from "../../AppGlobalStyle";
import styled from "styled-components";

export const GalleryCardsContainer = styled.div`
  @media ${device.mobileM} {
    column-count: 1;
  }
  @media ${device.tablet} {
    column-count: 2;
    column-gap: 40px;
  }
`;
