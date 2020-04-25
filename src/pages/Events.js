import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";

const Events = ({ isVisible, direction }) => {
  return (
    <Page isVisible={isVisible} direction={direction}>
      <h1>Events</h1>
    </Page>
  );
};

Events.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Events;
