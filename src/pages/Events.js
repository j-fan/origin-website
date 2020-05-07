import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledEvent = styled.div`
  h3 {
    margin-bottom: 0;
  }
  .date {
    margin-top: 0;
    color: #aaaaaa;
  }
`;

const Event = ({ eventName, date, location, description }) => (
  <StyledEvent>
    <h2>{eventName}</h2>
    <h3>{location}</h3>
    <p className="date">{date}</p>
    <p>{description}</p>
  </StyledEvent>
);

Event.propTypes = {
  eventName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Events = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Events</h1>
      <Event
        eventName={"Origin (Virtual)"}
        location={"Online"}
        date={"24.06.20 @ 6pm - 05/07/2020"}
        description={`Online (Virtual) will be a interactive web based exhibition to be 
          hosted here and on the Kudos Gallery website. This exhibition will feature artworks
          that will push the boundaries of websites as a medium, including
          artificial intelligence, generative art and audiovisual installations in virtual space,
          all running in the browser.
        `}
      />
      <Event
        eventName={"Origin (Parallels)"}
        location={"Kudos Gallery"}
        date={"Late 2020"}
        description={`Origin (Parallels) will be the second iteration of an ongoing series pioneered by a growing 
          community of Sydney-based media artists. With experimentation and collaboration at the core of 
          its mentality, "Parallels" is an inquiry into the potentialities of diverse interactive, generative 
          and media arts technologies. Using “Parallels” as the common curational theme, the artworks will be 
          run, performed, executed, delivered and experienced concurrently, all whilst sharing a metaphorical 
          and literal “pulse” through the incorporation of a common beat/soundtrack. "Parallels" explores how 
          media artists use  adjacent technologies and tools to grapple, understand and visualise an ultimately varied product.
          `}
      />
    </Page>
  );
};

Events.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Events;
