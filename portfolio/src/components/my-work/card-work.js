import React from "react";
import WorkCardImage from "./WorkCardImage";
import WorkCardIcons from "./WorkCardIcons";
import WorkCardDescription from "./WorkCardDescription";
import WorkCardFooter from "./WorkCardFooter";
import '../../App.css';

const WorkCard = ({ image, logo, description, techLogos, liveSiteLink, arrowIcon }) => {
  return (
    <div className="work-card-container">
      <WorkCardImage src={image.src} alt={image.alt} />
      <WorkCardIcons src={logo.src} alt={logo.alt} />
      <WorkCardDescription title={description.title} paragraphs={description.paragraphs} />
      <WorkCardFooter techLogos={techLogos} liveSiteLink={liveSiteLink} arrowIcon={arrowIcon} />
    </div>
  );
};

export default WorkCard;
