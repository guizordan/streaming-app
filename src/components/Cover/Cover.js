import React from "react";

function Cover({ image, title }) {
  return (
    <>
      <img width="135" height="205" src={image} alt={title} />
      <br />
      <p className="pt-1">{title}</p>
    </>
  );
}

export default Cover;
