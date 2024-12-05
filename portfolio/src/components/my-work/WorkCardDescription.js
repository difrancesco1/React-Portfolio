import React from "react";

const WorkCardDescription = ({ title, paragraphs }) => {
  return (
    <div className="work-card-text-cont">
      <p className="work-card-title">{title}</p>
      {paragraphs.map((para, index) => (
        <p key={index} className="work-card-para">{para}</p>
      ))}
    </div>
  );
};

export default WorkCardDescription;
