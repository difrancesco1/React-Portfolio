// ProjectMedia.js
import React from 'react';
import '../../App.css';

const ProjectMedia = ({ media }) => {
  return (
    <div className="project-gif-container">
      <img className="project-gif" src={media.src} alt={media.alt} />
    </div>
  );
};

export default ProjectMedia;
