import React from "react";

// WorkCardFooter.js
const WorkCardFooter = ({ techLogos, liveSiteLink, arrowIcon }) => {
    return (
      <div className="work-card-footer-cont">
        <div className="work-card-lang-cont">
          {techLogos.map((logo, index) => (
            <div key={index} className="tech-logo">
              <img src={logo.src} alt={logo.alt} className="tech-img" />
            </div>
          ))}
        </div>
        <a href={liveSiteLink} className="live-site-work">
          <p className="work-a">Check Live Site</p>
          <img className="arrow-icon" src={arrowIcon} alt="Arrow Up" />
        </a>
      </div>
    );
  };
  
  export default WorkCardFooter;

