import React from "react";
import Page from "../components/Page";
import PropTypes, { bool } from "prop-types";
import styled from "styled-components";

const StyledAbout = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
  a {
    padding: 2px 8px;
    text-transform: uppercase;
  }
`;

const SocialLink = styled.div`
  display: flex;
  align-items: center;
`;

const About = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <StyledAbout>
        <h1>About</h1>
        <p>
          Origin is a collective and community for Media Artists and creative
          individuals looking to meet, collaborate, critique, exhibit, share
          skills and build on creative projects. The focus of Origin is to
          connect the artists, creatives and already developing Media Arts
          communities within Sydney to form a strong foundation between all
          parties, so that together there's a way to reach out to those as
          passionate about digital creative practices.
        </p>
        <p>
          The desire for Origin is for it to become a recognised name for Media
          Arts in Sydney and eventually beyond as one for the community, the
          platform, the exhibitions, the parties and the meet-ups. Artists are
          encouraged to create their own Origin events so that publicly this
          name can be identified for its relationship with local digital
          creative practice, reaching more people as the identity grows. In
          growing the name, the hope is to expand the number of galleries and
          other public spaces that welcome Media Art, and bring more attention
          to Media Arts collectives and artists when applying for grants and
          residencies. While there are initial ideas for the potential of this
          community, what Origin eventuates to be will shift and form with
          everyone that gets involved.
        </p>
        <h2>Join us on:</h2>
        <SocialLink>
          <img src="img/discord.svg" />
          <a href="https://discord.gg/TzRQJuN">Discord</a>
        </SocialLink>
      </StyledAbout>
    </Page>
  );
};

About.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default About;
