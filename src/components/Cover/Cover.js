import React from "react";
import PropTypes from "prop-types";

function Cover({ image, title }) {
  return (
    <>
      <img width="135" height="205" src={image} alt={title} />
      <br />
      <p className="pt-1">{title}</p>
    </>
  );
}

Cover.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Cover.defaultProps = {
  image: "/images/cover_unavailable.png"
};

export default Cover;
