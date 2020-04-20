import React from "react";
import PropTypes from "prop-types";

const Page = ({ direction, isVisible }) => {
  return <div></div>;
};

Page.propTypes = {
  direction: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Page;
