import React from "react";

const WorkCardImage = ({ src, alt }) => {
  return (
    <div className="work-card-img-cont">
      <img src={src} alt={alt} className="work-card-img" />
    </div>
  );
};

export default WorkCardImage;
