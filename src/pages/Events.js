import React from "react";
import Page from "../components/Page";
import PropTypes from "prop-types";

const Events = ({ isVisible }) => {
  return (
    <Page isVisible={isVisible}>
      <h1>Events</h1>
    </Page>
  );
};

Events.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Events;
