import React from "react";

const WorkCardIcons = ({ src, alt }) => {
  return (
    <div className="work-card-icon-cont">
      <img src={src} alt={alt} className="work-card-icon" />
    </div>
  );
};

export default WorkCardIcons;
